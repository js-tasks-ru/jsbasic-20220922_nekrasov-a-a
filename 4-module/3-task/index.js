function highlight(table) {

  let nameIndex;
  let ageIndex;
  let genderIndex;
  let statusIndex;


  for (let j = 0; j < table.rows[0].cells.length; j++) {

    switch (table.rows[0].cells[j].textContent) {
    case 'Name':
      nameIndex = j;
      break;
    case 'Age':
      ageIndex = j;
      break;
    case 'Gender':
      genderIndex = j;
      break;
    case 'Status':
      statusIndex = j;
      break;
    }
  }

  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    let status = row.cells[statusIndex].dataset.available;
    let gender = row.cells[genderIndex].textContent;
    let age = row.cells[ageIndex].textContent;

    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    if (status === 'true') {
      row.classList.add('available');
    } else if (status === 'false') {
      row.classList.add('unavailable');
    } else {
      row.hidden = true;
    }

    if (age < 18) {
      row.style = "text-decoration: line-through";
    }
  }
}
