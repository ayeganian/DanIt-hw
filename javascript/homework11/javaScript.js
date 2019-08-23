document.addEventListener('keydown', (event) => {

    function turnToBlue(button) {
        const BtnWrp = document.querySelectorAll('#btn-wrapper> button');
        BtnWrp.forEach((element) => {
            element.style.backgroundColor = '#33333a';
        })
        button.style.backgroundColor = 'blue';
    }

    switch (event.keyCode) {
        case 13:
            const clickedBtnEnter = document.querySelector('button.enter');
            turnToBlue(clickedBtnEnter);
            break;
        case 83:
            const clickedBtnS = document.querySelector('button.s');
            turnToBlue(clickedBtnS);
            break;
        case 69:
            const clickedBtnE = document.querySelector('button.e');
            turnToBlue(clickedBtnE);
            break;
        case  79:
            const clickedBtnO = document.querySelector('button.o');
            turnToBlue(clickedBtnO);
            break;
        case 78:
            const clickedBtnN = document.querySelector('button.n');
            turnToBlue(clickedBtnN);
            break;
        case 76:
            const clickedBtnL = document.querySelector('button.l');
            turnToBlue(clickedBtnL);
            break;
        case 90:
            const clickedBtnZ = document.querySelector('button.z');
            turnToBlue(clickedBtnZ);
            break;
    }
});

