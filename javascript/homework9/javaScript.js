const tabsContents = document.getElementsByClassName('tab');

const clickHandler = (event) => {
    const clickedLi = event.target;
    const activeTab = document.getElementsByClassName('active');
    if (activeTab.length > 0) activeTab[0].classList.remove('active');
    clickedLi.classList.add('active');
    for (let element of tabsContents) {
        element.classList.add('tab-hidden');
        if (element.dataset.tab === clickedLi.dataset.tab) {
            element.classList.remove('tab-hidden');
        }
    }
};
const tabsWrapper = document.getElementById('tabs');
tabsWrapper.addEventListener('click', clickHandler);


