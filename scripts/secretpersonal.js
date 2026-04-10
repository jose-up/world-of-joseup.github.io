// Logic for Adding an Item
let items = JSON.parse(localStorage.getItem('budget-items')) || [];

function addItem() {
    let inputs = document.querySelectorAll('input[type="text"]');
    
    let item = {
        name: inputs[0].value,
        link: inputs[1].value,
        price: inputs[2].value,
        section: inputs[3].value
    };
    
    items.push(item);
    localStorage.setItem('budget-items', JSON.stringify(items));
    renderItems();
}

function renderItems() {
    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    
    items.forEach(item => {
        let row = document.createElement('tr');
        let html = '<td><a href="' + item.link + '">' + item.name + '</a></td>';
        html += '<td></td>';
        html += '<td>' + item.price + '</td>';
        row.innerHTML = html;
        tableBody.appendChild(row);
    });
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    addItem();
});

renderItems();