function fullName() {
  console.log(this.firstName, this.lastName);
}

let user5 = {
  firstName: 'Leonid',
  lastName: 'Jacubovich',
  fullName
};

// вывести все свойства user5 исаользуя Object.keys + for
Object.keys(user5).forEach(element => console.log(element, 'type: ', typeof element));


