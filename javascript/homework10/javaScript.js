const TellPasswInput = document.querySelector('.tell-passw');
const ConfirmPasswInput = document.querySelector('.confirm-passw');


function ChangeShowPasswBtn(button) {
    if (button.classList.contains('fa-eye')) {
        button.classList.remove('fa-eye');
        button.classList.add('fa-eye-slash');
    } else {
        button.classList.remove('fa-eye-slash');
        button.classList.add('fa-eye');
    }
}

TellPasswInput.addEventListener('click', () => {
    let eye = document.getElementById('no-slash');
    let x = TellPasswInput;
    if (x.type === "password") {
        x.type = "text";
        ChangeShowPasswBtn(eye);
    } else {
        x.type = "password";
        ChangeShowPasswBtn(eye);
    }
})

ConfirmPasswInput.addEventListener('click', () => {
    let eye = document.getElementById('slash');
    let x = ConfirmPasswInput;

    if (x.type === "password") {
        x.type = "text";
        ChangeShowPasswBtn(eye);
    } else {
        x.type = "password";
        ChangeShowPasswBtn(eye);
    }
})


const Btn = document.querySelector('button.btn');

Btn.addEventListener('click', () => {

    if (TellPasswInput.value === ConfirmPasswInput.value) {
        document.getElementsByTagName('span')[0].remove();
        setTimeout(() => alert(`You are welcome`), 200);
    } else {
        if (document.getElementsByTagName('span').length == 0) {
            const UncorrectPasswText = document.createElement('span');
            UncorrectPasswText.innerText = `Нужно ввести одинаковые значения`;
            UncorrectPasswText.style.color = 'red';
            UncorrectPasswText.style.marginBottom = '10px';
            Btn.before(UncorrectPasswText);
        }
    }
}
)ы
