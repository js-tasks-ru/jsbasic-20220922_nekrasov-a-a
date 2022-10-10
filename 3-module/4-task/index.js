function showSalary(users, age) {
  const selectedArr = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      selectedArr.push([users[i].name, users[i].balance].join(', '));
    }
  }
  return selectedArr.join('\n');
}
