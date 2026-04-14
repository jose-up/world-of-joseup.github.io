function getLists() {
    return JSON.parse(localStorage.getItem('lists')) || ['A', 'B'];
}

function saveLists(lists) {
    localStorage.setItem('lists', JSON.stringify(lists));
}

function getItems(scenario) {
    return JSON.parse(localStorage.getItem('budget-' + scenario)) || [];
}

function saveItems(scenario, items) {
    localStorage.setItem('budget-' + scenario, JSON.stringify(items));
}

function getSections() {
    var scenario = document.getElementById('scenario-select').value;
    var items = getItems(scenario);
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

function renderScenarioDropdown() {
    var lists = getLists();
    var select = document.getElementById('scenario-select');
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

    var removeBtn = document.getElementById('remove-scenario-btn');
    if (lists.length === 1) {
        removeBtn.style.display = 'none';
    } else {
        removeBtn.style.display = 'inline-block';
    }
}

function renderTables() {
    var scenario = document.getElementById('scenario-select').value;
    var items = getItems(scenario);
    var container = document.getElementById('tables-container');
    container.innerHTML = '';

    var needsSave = false;
    for (var i = 0; i < items.length; i++) {
        if (!items[i] || !items[i].section) {
            if (items[i]) {
                items[i].section = 'Uncategorized';
                needsSave = true;
            }
        }
    }
    if (needsSave) {
        saveItems(scenario, items);
    }

    var sections = [];
    var grandTotal = 0;
    var excludedTotals = 0;
    var hasGiftSection = false;
    var giftRegex = /gift/i;
    for (var i = 0; i < items.length; i++) {
        if (items[i] && sections.indexOf(items[i].section) === -1) {
            sections.push(items[i].section);
        }
    }

    for (var s = 0; s < sections.length; s++) {
        var section = sections[s];
        var total = 0;

        var table = document.createElement('table');
        var html = '<caption>' + section + '</caption>' +
            '<tr><th>Product</th><th>Price</th><th></th></tr>';

        for (var j = 0; j < items.length; j++) {
            if (items[j] && items[j].section === section) {
                total += parseFloat(items[j].price || 0);
                html += '<tr>' +
                    '<td><a href="' + items[j].link + '" target="_blank">' + items[j].name + '</a></td>' +
                    '<td>$' + parseFloat(items[j].price || 0).toFixed(2) + '</td>' +
                    '<td><button class="remove-btn" data-global-index="' + j + '">Remove</button></td>' +
                '</tr>';
            }
        }

        html += '<tr>' +
            '<td><strong>Total</strong></td>' +
            '<td><strong>$' + total.toFixed(2) + '</strong></td>' +
            '<td></td>' +
        '</tr>';

        table.innerHTML = html;
        container.appendChild(table);

        if (giftRegex.test(section)) {
            excludedTotals += total;
            hasGiftSection = true;
        } else {
            grandTotal += total;
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

    var removeButtons = container.querySelectorAll('button.remove-btn');
    for (var b = 0; b < removeButtons.length; b++) {
        removeButtons[b].addEventListener('click', function() {
            var currentScenario = document.getElementById('scenario-select').value;
            var currentItems = getItems(currentScenario);
            var globalIndex = parseInt(this.getAttribute('data-global-index'));

            var newItems = [];
            for (var n = 0; n < currentItems.length; n++) {
                if (n !== globalIndex) {
                    newItems.push(currentItems[n]);
                }
            }

            saveItems(currentScenario, newItems);
            renderTables();
        });
    }
}

document.getElementById('add-scenario-btn').addEventListener('click', function() {
    var name = document.getElementById('new-scenario-name').value.trim();
    if (!name) return;

    var lists = getLists();
    if (lists.indexOf(name) !== -1) {
        return;
    }

    lists.push(name);
    saveLists(lists);
    renderScenarioDropdown();
    document.getElementById('scenario-select').value = name;
    document.getElementById('new-scenario-name').value = '';
    renderTables();
});

document.getElementById('remove-scenario-btn').addEventListener('click', function() {
    var lists = getLists();
    if (lists.length === 1) {
        return;
    }

    var scenario = document.getElementById('scenario-select').value;
    localStorage.removeItem('budget-' + scenario);

    var newLists = [];
    for (var i = 0; i < lists.length; i++) {
        if (lists[i] !== scenario) {
            newLists.push(lists[i]);
        }
    }

    saveLists(newLists);
    renderScenarioDropdown();
    renderTables();
});

document.getElementById('scenario-select').addEventListener('change', renderTables);

document.getElementById('add-item-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var scenario = document.getElementById('scenario-select').value;
    var items = getItems(scenario);
    var sectionValue = document.getElementById('item-section').value;

    if (!sectionValue || sectionValue.trim() === '') {
        sectionValue = 'Uncategorized';
    }

    items.push({
        name: document.getElementById('item-name').value,
        link: document.getElementById('item-link').value,
        price: document.getElementById('item-price').value,
        section: sectionValue.trim()
    });

    saveItems(scenario, items);
    document.getElementById('add-item-form').reset();
    renderTables();
});

var sectionInput = document.getElementById('item-section');
var sectionDropdown = document.getElementById('section-dropdown');

sectionInput.addEventListener('input', function() {
    showSectionDropdown(this.value);
});

sectionInput.addEventListener('focus', function() {
    showSectionDropdown(this.value);
});

sectionInput.addEventListener('blur', function() {
    sectionDropdown.style.display = 'none';
});

renderScenarioDropdown();
renderTables();