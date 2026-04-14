function getScenarios() {
    return JSON.parse(localStorage.getItem('scenarios')) || ['A', 'B'];
}

function saveScenarios(scenarios) {
    localStorage.setItem('scenarios', JSON.stringify(scenarios));
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
        if (items[i].section && sections.indexOf(items[i].section) === -1) {
            sections.push(items[i].section);
        }
    }
    return sections;
}

function showSectionDropdown(filter) {
    var dropdown = document.getElementById('section-dropdown');
    var sections = getSections();
    dropdown.innerHTML = '';

    var matches = [];
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
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
    var scenarios = getScenarios();
    var select = document.getElementById('scenario-select');
    var current = select.value;
    select.innerHTML = '';

    for (var i = 0; i < scenarios.length; i++) {
        var option = document.createElement('option');
        option.value = scenarios[i];
        option.textContent = scenarios[i];
        select.appendChild(option);
    }

    if (current && scenarios.indexOf(current) !== -1) {
        select.value = current;
    }

    var removeBtn = document.getElementById('remove-scenario-btn');
    if (scenarios.length === 1) {
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

    for (var i = 0; i < items.length; i++) {
        if (!items[i].section) {
            items[i].section = 'Uncategorized';
        }
    }

    var sections = [];
    for (var i = 0; i < items.length; i++) {
        if (sections.indexOf(items[i].section) === -1) {
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
            if (items[j].section === section) {
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

    var scenarios = getScenarios();
    if (scenarios.indexOf(name) !== -1) {
        return;
    }

    scenarios.push(name);
    saveScenarios(scenarios);
    renderScenarioDropdown();
    document.getElementById('scenario-select').value = name;
    document.getElementById('new-scenario-name').value = '';
    renderTables();
});

document.getElementById('remove-scenario-btn').addEventListener('click', function() {
    var scenarios = getScenarios();
    if (scenarios.length === 1) {
        return;
    }

    var scenario = document.getElementById('scenario-select').value;
    localStorage.removeItem('budget-' + scenario);

    var newScenarios = [];
    for (var i = 0; i < scenarios.length; i++) {
        if (scenarios[i] !== scenario) {
            newScenarios.push(scenarios[i]);
        }
    }

    saveScenarios(newScenarios);
    renderScenarioDropdown();
    renderTables();
});

document.getElementById('scenario-select').addEventListener('change', renderTables);

document.getElementById('add-item-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var scenario = document.getElementById('scenario-select').value;
    var items = getItems(scenario);

    items.push({
        name: document.getElementById('item-name').value,
        link: document.getElementById('item-link').value,
        price: document.getElementById('item-price').value,
        section: document.getElementById('item-section').value
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