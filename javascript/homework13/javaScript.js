

function changeTheme() {

    ChangeThemeBtn.classList.toggle('dark');
    document.querySelector('body').classList.toggle('dark-theme');
    document.querySelector('.menubar').classList.toggle('dark-theme');
    document.querySelector('.image').classList.toggle('dark-theme');
    document.querySelector('.text-container').classList.toggle('dark-theme');
    document.querySelector('.footer').classList.toggle('footer-dark-theme');
    document.querySelector('.top-navbar').classList.toggle('footer-dark-theme');


    if(ChangeThemeBtn.classList.contains('dark')){
        localStorage.setItem('PageTheme', 'DarkTheme');
    }else{
        localStorage.setItem('PageTheme', 'WhiteTheme');
    }

};

const ChangeThemeBtn = document.querySelector('#change-theme-btn');
ChangeThemeBtn.addEventListener('click', changeTheme );

if (localStorage.getItem('PageTheme') === 'DarkTheme') {
    changeTheme()
};





