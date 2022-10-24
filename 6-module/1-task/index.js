/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  generateTable(rows) {
    let table = document.createElement('table');
    const tableHeaders = ["Имя", "Возраст", "Зарплата", "Город"];

    let header = table.createTHead();
    let tHead = header.insertRow();
    tableHeaders.forEach(key => {
      let text = document.createTextNode(key);
      tHead.insertCell().appendChild(text);
    });


    for (let [id, element] of Object.entries(rows)) {
      let row = table.insertRow();
      for (let key of Object.keys(element)) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
      let button = document.createElement('button');
      button.append('X');
      button.setAttribute('id', id);
      row.insertCell().appendChild(button);
    }
    table.addEventListener('click', this.handleClick);
    return table;
  }

  constructor(rows) {
    this.elem = this.generateTable(rows);
  }

  handleClick(event) {
    if (event.target.id) {
      event.target.closest('tr').remove();
    }
  }
}
