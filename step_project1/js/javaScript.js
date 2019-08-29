<!--______________________________Services-section__________________________________________________-->

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

<!--__________________________ Our amazing work section_____________________________________________________-->

// randomiser for all
/*const imgsArray = document.querySelector('.img-gallery');
console.log(imgsArray);

for(let counter = 0; counter <= 12; counter++){
    console.log(imgsArray[counter]);

}*/


// tabs with categories

const $tabs2 = $('.img-gallery-item');

$('.tabs2-title').click((event) => {

    // removing of button on categories
    const LoadMoreBtn = document.querySelector('.load-more-btn');
    if(event.target.dataset.category === 'all'){
        LoadMoreBtn.style.display = 'inline-block';
    } else{
        LoadMoreBtn.style.display = 'none';
    };
    // ----------------

    $('.active').removeClass('active');
    const clickedLi = $(event.target);
    clickedLi.addClass("active");

    $tabs2.each((elemIndex, el) => {
        $(el).addClass("tab-hidden");
        if ($(el).data("category") === (clickedLi.data("category"))) $(el).removeClass('tab-hidden');
    });
// Имя текущей категории
    let $categoryName = clickedLi.data("category");

// Див, появляющийся по ховеру
    const $img = $('.img-gallery-item');

    $img.on('mouseenter', hoverDivGeneration);

    function hoverDivGeneration(event) {
      const $hoverDiv = $('<div class="div-on-hover">' +
            '<div>' +
            ' <i class="div-on-hover-icons fas fa-link"></i>' +
            '<i class="div-on-hover-icons fas fa-search"></i>' +
            '</div>' +
            '<p class="creative-design marine-text">creative design</p>' +
            ' <p>' +$categoryName+ ' </p> ' +
            '</div>');
        $(event.target).css.position = "relative";
        $(event.target).before($hoverDiv);
    };

    $img.on('mouseleave', () => {
        $('.div-on-hover').remove();
    });
});

// load more button

const LoadMoreBtn = document.querySelector('.load-more-btn');
LoadMoreBtn.addEventListener('click', () => {

    document.querySelector('.img-gallery').querySelectorAll('[data-cat="more"]').forEach((element) => {
        element.classList.remove('tab-hidden');
    })

});








// __________________________ Breaking News section____________________________________________________



// const aForHover = document.querySelectorAll('.br-news-section>a');
//
// aForHover.addEventListener('mouseover', function(e){
//     const partOnMouseover = e.target;
//
//     partOnMouseover.children[0].style.backgroundColor = '#18cfab';
//     partOnMouseover.children[2].style.color = '#18cfab';
//
// });

// function hovering(e) {
//     const partOnMouseover = e.target;
//
//     partOnMouseover.children[0].style.backgroundColor = '#18cfab';
//     partOnMouseover.children[2].style.color = '#18cfab';
//
// };
