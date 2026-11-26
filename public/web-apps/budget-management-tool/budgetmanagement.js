var BUDGET_DEPLOY_VERSION = '2026-04-22-1';
var LISTS_STORAGE_KEY = 'budget-lists';
var LEGACY_LISTS_STORAGE_KEY = 'lists';
var ITEM_STORAGE_PREFIX = 'budget-list-';
var LEGACY_ITEM_STORAGE_PREFIX = 'budget-';

function getItemStorageKey(listName) {
    return ITEM_STORAGE_PREFIX + listName;
}

function getLegacyItemStorageKey(listName) {
    return LEGACY_ITEM_STORAGE_PREFIX + listName;
}

function migrateLegacyBudgetStorageKeys() {
    var currentLists = JSON.parse(localStorage.getItem(LISTS_STORAGE_KEY) || 'null');
    var legacyLists = JSON.parse(localStorage.getItem(LEGACY_LISTS_STORAGE_KEY) || 'null');

    if (!Array.isArray(currentLists) && Array.isArray(legacyLists)) {
        localStorage.setItem(LISTS_STORAGE_KEY, JSON.stringify(legacyLists));
        currentLists = legacyLists;
    }

    if (!Array.isArray(currentLists)) {
        currentLists = [];
    }

    for (var i = 0; i < currentLists.length; i++) {
        var listName = currentLists[i];
        var newKey = getItemStorageKey(listName);
        var legacyKey = getLegacyItemStorageKey(listName);

        if (localStorage.getItem(newKey) === null) {
            var legacyItems = localStorage.getItem(legacyKey);
            if (legacyItems !== null) {
                localStorage.setItem(newKey, legacyItems);
            }
        }
    }
}

function clearBudgetStorageOnNewDeploy() {
    var versionKey = 'budget-deploy-version';
    var previousVersion = localStorage.getItem(versionKey);

    if (previousVersion === BUDGET_DEPLOY_VERSION) {
        return;
    }

    var keysToRemove = [];
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key === 'lists' || (key && key.indexOf('budget-') === 0)) {
            keysToRemove.push(key);
        }
    }

    for (var j = 0; j < keysToRemove.length; j++) {
        localStorage.removeItem(keysToRemove[j]);
    }

    localStorage.setItem(versionKey, BUDGET_DEPLOY_VERSION);
}

function getLists() {
    return JSON.parse(localStorage.getItem(LISTS_STORAGE_KEY)) || JSON.parse(localStorage.getItem(LEGACY_LISTS_STORAGE_KEY)) || ['A', 'B'];
}

function saveLists(lists) {
    localStorage.setItem(LISTS_STORAGE_KEY, JSON.stringify(lists));
}

function getItems(listName) {
    return JSON.parse(localStorage.getItem(getItemStorageKey(listName))) || JSON.parse(localStorage.getItem(getLegacyItemStorageKey(listName))) || [];
}

function saveItems(listName, items) {
    localStorage.setItem(getItemStorageKey(listName), JSON.stringify(items));
}

function createItemId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
        return window.crypto.randomUUID();
    }
    return String(Date.now()) + '-' + String(Math.random()).slice(2);
}

function getSections() {
    var listName = document.getElementById('list-select').value;
    var items = getItems(listName);
    var sections = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i] && items[i].section && sections.indexOf(items[i].section) === -1) {
            sections.push(items[i].section);
        }
    }
    return sections;
}

function showSectionDropdown(filter) {
    if (filter === undefined || filter === null) {
        filter = '';
    }

    var dropdown = document.getElementById('section-dropdown');
    var sections = getSections();
    dropdown.innerHTML = '';

    var matches = [];
    for (var i = 0; i < sections.length; i++) {
        if (sections[i] && sections[i].toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
            matches.push(sections[i]);
        }
    }

    if (matches.length === 0) {
        dropdown.style.display = 'none';
        return;
    }

    for (var j = 0; j < matches.length; j++) {
        var item = document.createElement('div');
        item.textContent = matches[j];
        item.setAttribute('data-value', matches[j]);
        item.addEventListener('mousedown', function(e) {
            e.preventDefault();
            document.getElementById('item-section').value = this.getAttribute('data-value');
            dropdown.style.display = 'none';
        });
        dropdown.appendChild(item);
    }

    dropdown.style.display = 'block';
}

function renderListDropdown() {
    var lists = getLists();
    var select = document.getElementById('list-select');
    var current = select.value;
    select.innerHTML = '';

    for (var i = 0; i < lists.length; i++) {
        var option = document.createElement('option');
        option.value = lists[i];
        option.textContent = lists[i];
        select.appendChild(option);
    }

    if (current && lists.indexOf(current) !== -1) {
        select.value = current;
    }

    var removeBtn = document.getElementById('remove-list-btn');
    if (lists.length === 1) {
        removeBtn.style.display = 'none';
    } else {
        removeBtn.style.display = 'inline-block';
    }
}

function renderTables() {
    var listName = document.getElementById('list-select').value;
    var items = getItems(listName);
    var container = document.getElementById('tables-container');
    var giftRegex = /gift/i;
    container.innerHTML = '';

    var needsSave = false;
    for (var i = 0; i < items.length; i++) {
        if (!items[i] || !items[i].section) {
            if (items[i]) {
                items[i].section = 'Uncategorized';
                needsSave = true;
            }
        }
        if (items[i] && !items[i].id) {
            items[i].id = createItemId();
            needsSave = true;
        }
        if (items[i] && giftRegex.test(items[i].section || '')) {
            if (!items[i].isGifted) {
                items[i].isGifted = true;
                needsSave = true;
            }
            if (items[i].previousSection) {
                items[i].section = items[i].previousSection;
                delete items[i].previousSection;
                needsSave = true;
            }
        }
    }
    if (needsSave) {
        saveItems(listName, items);
    }

    var sections = [];
    var grandTotal = 0;
    var excludedTotals = 0;
    var hasGiftSection = false;
    for (var i = 0; i < items.length; i++) {
        if (items[i] && sections.indexOf(items[i].section) === -1) {
            sections.push(items[i].section);
        }
    }

    for (var s = 0; s < sections.length; s++) {
        var section = sections[s];
        var isGiftSection = giftRegex.test(section);
        var total = 0;

        var table = document.createElement('table');
        var html = '<caption>' + section + '</caption>' +
            '<tr><th>Product</th><th>Price</th><th></th></tr>';

        for (var j = 0; j < items.length; j++) {
            if (items[j] && items[j].section === section) {
                var giftButtonLabel = items[j].isGifted ? 'Unmark Gift' : 'Gift';
                var giftButtonClass = items[j].isGifted ? 'gift-btn ungift-btn' : 'gift-btn';
                var actionButtons = '<button type="button" class="remove-btn" data-item-id="' + items[j].id + '">Remove</button>';
                if (!isGiftSection) {
                    actionButtons = '<button type="button" class="' + giftButtonClass + '" data-item-id="' + items[j].id + '">' + giftButtonLabel + '</button><br>' + actionButtons;
                }
                total += parseFloat(items[j].price || 0);
                html += '<tr>' +
                    '<td><a href="' + items[j].link + '" target="_blank">' + items[j].name + '</a></td>' +
                    '<td>$' + parseFloat(items[j].price || 0).toFixed(2) + '</td>' +
                    '<td>' + actionButtons + '</td>' + '</tr>';
            }
        }

        html += '<tr>' +
            '<td><strong>Total</strong></td>' +
            '<td><strong>$' + total.toFixed(2) + '</strong></td>' +
            '<td></td>' +
        '</tr>';

        table.innerHTML = html;
        container.appendChild(table);

        if (isGiftSection) {
            excludedTotals += total;
            hasGiftSection = true;
        } else {
            grandTotal += total;
        }

        for (var k = 0; k < items.length; k++) {
            if (items[k] && items[k].section === section && !!items[k].isGifted && !isGiftSection) {
                excludedTotals += parseFloat(items[k].price || 0);
                grandTotal -= parseFloat(items[k].price || 0);
                hasGiftSection = true;
            }
        }
    }

    // Add excluded totals and grand total at the bottom
    if (sections.length > 0) {
        var summaryDiv = document.createElement('div');
        summaryDiv.className = 'grand-total';

        if (hasGiftSection) {
            var excludedLabel = document.createElement('div');
            excludedLabel.textContent = 'Gift Total: $' + excludedTotals.toFixed(2);
            summaryDiv.appendChild(excludedLabel);
        }

        var grandTotalLabel = document.createElement('div');
        grandTotalLabel.textContent = 'Grand Total: $' + grandTotal.toFixed(2);
        summaryDiv.appendChild(grandTotalLabel);

        container.appendChild(summaryDiv);
    }

}

document.getElementById('add-list-btn').addEventListener('click', function() {
    var name = document.getElementById('new-list-name').value.trim();
    if (!name) return;

    var lists = getLists();
    if (lists.indexOf(name) !== -1) {
        return;
    }

    lists.push(name);
    saveLists(lists);
    renderListDropdown();
    document.getElementById('list-select').value = name;
    document.getElementById('new-list-name').value = '';
    renderTables();
});

document.getElementById('remove-list-btn').addEventListener('click', function() {
    var lists = getLists();
    if (lists.length === 1) {
        return;
    }

    var listName = document.getElementById('list-select').value;
    localStorage.removeItem(getItemStorageKey(listName));
    localStorage.removeItem(getLegacyItemStorageKey(listName));

    var newLists = [];
    for (var i = 0; i < lists.length; i++) {
        if (lists[i] !== listName) {
            newLists.push(lists[i]);
        }
    }

    saveLists(newLists);
    renderListDropdown();
    renderTables();
});

document.getElementById('list-select').addEventListener('change', renderTables);

document.getElementById('add-item-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var listName = document.getElementById('list-select').value;
    var items = getItems(listName);
    var sectionValue = document.getElementById('item-section').value;

    if (!sectionValue || sectionValue.trim() === '') {
        sectionValue = 'Uncategorized';
    }

    items.push({
        id: createItemId(),
        name: document.getElementById('item-name').value,
        link: document.getElementById('item-link').value,
        price: document.getElementById('item-price').value,
        section: sectionValue.trim()
    });

    saveItems(listName, items);
    document.getElementById('add-item-form').reset();
    renderTables();
});

var sectionInput = document.getElementById('item-section');
var sectionDropdown = document.getElementById('section-dropdown');
var tablesContainer = document.getElementById('tables-container');

tablesContainer.addEventListener('click', function(e) {
    var button = e.target.closest('button.remove-btn, button.gift-btn');
    if (!button || !tablesContainer.contains(button)) {
        return;
    }

    var itemId = button.getAttribute('data-item-id');
    if (!itemId) {
        return;
    }

    var currentList = document.getElementById('list-select').value;
    var currentItems = getItems(currentList);

    if (button.classList.contains('remove-btn')) {
        var remainingItems = [];
        for (var i = 0; i < currentItems.length; i++) {
            if (!currentItems[i] || currentItems[i].id !== itemId) {
                remainingItems.push(currentItems[i]);
            }
        }
        saveItems(currentList, remainingItems);
        renderTables();
        return;
    }

    if (button.classList.contains('gift-btn')) {
        var updatedItems = [];
        for (var j = 0; j < currentItems.length; j++) {
            if (!currentItems[j]) {
                continue;
            }

            if (currentItems[j].id === itemId) {
                currentItems[j].isGifted = !currentItems[j].isGifted;
            }
            updatedItems.push(currentItems[j]);
        }
        saveItems(currentList, updatedItems);
        renderTables();
    }
});

sectionInput.addEventListener('input', function() {
    showSectionDropdown(this.value);
});

sectionInput.addEventListener('focus', function() {
    showSectionDropdown(this.value);
});

sectionInput.addEventListener('blur', function() {
    sectionDropdown.style.display = 'none';
});

migrateLegacyBudgetStorageKeys();
clearBudgetStorageOnNewDeploy();
renderListDropdown();
renderTables();
