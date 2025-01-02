div5.addEventListener('mouseout', () => {
  if (!div5.querySelector('.table-form')) {
    const form = document.createElement('div');
    form.className = 'table-form';
    form.innerHTML = `
      <input type="number" min="1" placeholder="Number of columns">
      <button type="button">Create table</button>
    `;
    div5.appendChild(form);
    
    const button = form.querySelector('button');
    button.addEventListener('click', createTable);
  }
});

function createTable() {
  const cells = parseInt(div5.querySelector('input').value);
  if (!cells) return;

  const table = document.createElement('table');
  const rows = cells % 2 ? 1 : 2;
  const cols = rows === 1 ? cells : cells / 2;

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');
      td.contentEditable = true;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.onclick = () => {
    const tableData = [];
    table.querySelectorAll('td').forEach(td => {
      tableData.push(td.textContent);
    });
    localStorage.setItem('div5Table', JSON.stringify(tableData));
    div5.appendChild(table.cloneNode(true));
  };

  div5.appendChild(table);
  div5.appendChild(saveButton);
}

window.onbeforeunload = () => {
  localStorage.removeItem('div5Table');
};