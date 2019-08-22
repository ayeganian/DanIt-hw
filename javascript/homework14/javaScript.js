const $tabsContents = $('.tab');
const tabsContents = document.getElementsByClassName('tab');

$('#tabs').on('click', (event) => {

        $('.active').removeClass('active');
        const clickedLi = (event.target);
        clickedLi.classList.add('active');

        $tabsContents.addClass("tab-hidden");

        for (let element of tabsContents) {
            if (element.dataset.tab === clickedLi.dataset.tab) {
                element.classList.remove('tab-hidden');
            }
        }
    }
);



js 9 new, js 14, js 11