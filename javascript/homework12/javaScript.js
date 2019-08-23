
let timerId = setInterval(() => showImg(), 10000);

const images= document.querySelectorAll('.image-to-show');
let imgIndex = 0
images[0].style.display='block';

function showImg() {
    images.forEach ((element,i) =>{
        element.style.display='none';
        if(i === (imgIndex % images.length)){
            images[i].style.display='block';
        } else {
            images[i].style.display='none';
        }
    })
    imgIndex++
}

showImg()

const StartSlideshow = document.createElement('button');
StartSlideshow.innerHTML='Возобновить показ';
StartSlideshow.classList.add('btns');
document.querySelector('div').after(StartSlideshow);
StartSlideshow.disabled=true;
StartSlideshow.addEventListener('click',()=>{
    let timerId = setInterval(() => showImg(), 10000);
})
const EndSlideshow = document.createElement('button');
EndSlideshow.innerHTML='Прекратить';
EndSlideshow.classList.add('btns');
document.querySelector('div').after(EndSlideshow);
EndSlideshow.addEventListener('click',()=>{
    StartSlideshow.disabled=false;
    clearInterval(timerId);
})

