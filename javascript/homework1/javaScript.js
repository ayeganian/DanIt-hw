let Name = prompt('Enter your name, please', 'John');
while (parseInt(Name)
    || parseInt(Name) === 0
    || Name === null
    ) {
    Name = prompt('Enter your name again, please', 'John')
}
let Age = prompt('Enter your age, please', '20');

while (isNaN(Age) || Age === null || Age < 1 || Age > 110) {
    Age = prompt("Enter your age again, please", "20")
}
if (Age < 18) {
    alert(`You are not allowed to visit this website`);

} else if (Age >= 18 && Age <= 22) {
    if (confirm(`Are you sure you want to continue?`)) {
        alert(`Welcome ${Name}`);
    } else {
        alert(`You are not allowed to visit this website`);
    }

} else if (Age > 22) {
    alert(`Welcome ${Name}` );
}
