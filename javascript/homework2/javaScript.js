let userNumber = prompt("Enter the number, please", '5');
while (isNaN(userNumber) || (userNumber % 1 !== 0)) {
    userNumber = prompt("Enter the number again, please", "25")
}
for (let i = 0; i < userNumber; i += 5) {
    if (userNumber <= 5) {
        console.log('Sorry, no numbers');
    } else {
        console.log(i);
    }
}


// ________Не обязательное задание - 2___________________________________________________________________


let m = +prompt("Enter the M, please", '5');

for (let d = 2; d * d <= m; d++) {
    while (m % d === 0 || m === 1) {
        alert("Error");
        m = prompt("Enter the N again, please", '5');
    }
}

let n = +prompt("Enter the N, please", '17');


for (let d = 2; d * d <= n; d++) {
    while (n % d === 0 || n === 1) {
        alert("Error");
        n = prompt("Enter the N again, please", '17');
    }
}

        SimpleNum:
            for (let i = m; i <= n; i++) {
                for (let j = 2; j < i; j++) {
                    if (i % j === 0) continue SimpleNum;
                }
                console.log(i)
            }

