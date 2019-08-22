
document.addEventListener('keydown', (event) => {

    switch (event.keyCode) {
        case 13:
            const btn = document.querySelector('button.enter');
            btn.style.backgroundColor = 'blue';
            break;
        case 83:
            const btnS = document.querySelector('button.s');
            btnS.style.backgroundColor = 'blue';
            break;
        case 69:
            const btnE = document.querySelector('button.e');
            btnE.style.backgroundColor = 'blue';
            break;
        case  79:
            const btnO = document.querySelector('button.o');
            btnO.style.backgroundColor = 'blue';
            break;
        case 78:
            const btnN = document.querySelector('button.n');
            btnN.style.backgroundColor = 'blue';
            break;
        case 76:
            const btnL = document.querySelector('button.l');
            btnL.style.backgroundColor = 'blue';
            break;
        case 90:
            const btnZ = document.querySelector('button.z');
            btnZ.style.backgroundColor = 'blue';
            break;
    }
});


// const SelectedButton;
//
// (event) => {
//     let target = event.target;
//     turnToBlue(target);
// };
//
// function turnToBlue(button) {
//     clickedElement.classList.toggle('highlight');
// if (SelectedButton) { // убрать существующую подсветку, если есть
//     SelectedButton.classList.remove('highlight');
// }
// SelectedButton = button;
// SelectedButton.classList.add('highlight'); // подсветить новый td
// }
// const clickHandler = (event) => {
//     const clickedBtn = event.target;
//    const letter =clickedBtn.dataset.btn;
// const class = document.getElementsByClassName(letter);
//    letter.classList.toggle('highlight');
// }

// btns.addEventListener('click', clickHandler);

/*

const clickHandler = (event) => {
    const clickedBtn = event.target;
    alert(`the number of clicked button is ${clickedBtn.dataset.btnShmatton}`);
    const wrapper = event.currentTarget;
    for(let i = 0; i < wrapper.children.length; i++){
      if(wrapper.children[i] === event.target){
        alert(`the number of clicked button is ${i+1}`);
      }
    }
};
const gogi = document.getElementById('gogi');
gogi.addEventListener('click', clickHandler);
*/

