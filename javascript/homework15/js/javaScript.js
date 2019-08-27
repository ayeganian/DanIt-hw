
//_____________________________ меню с прокручиванием до выбранного места_________________________________



    $(".nav-bar>a").on("click", function(event){
        let menuItem = $(this);
        $('html, body').stop().animate({
            scrollTop: $(menuItem.attr('href')).offset().top
        }, 1500);
        event.preventDefault();
        return false;
    });


//_____________________________ кнопка наверх при прокрутке экрана_________________________________


$(document).scroll(function () {
    const $screenHeight = $(window).innerHeight();
    const $screenTop = $(window).scrollTop();

    if ($screenTop>=$screenHeight){
        if (!$('.scroll-top-btn').length){
            const $scrollTopBtn = $('<button class="scroll-top-btn"> Наверх </button>');
// если длина не ноль то тру

            $('script').before($scrollTopBtn);
            $scrollTopBtn.click( () =>{
                $('html').animate({
                    scrollTop: 0
                }, 1000)
            })

        }
    }else{

        $('.scroll-top-btn').fadeOut( 500, () => {
            $('.scroll-top-btn').remove();
        });
    }
});

//_____________________________ кнопка тогл для секции top rated_________________________________

$('.toggle-btn').on('click' , (event) => {
    $(event.currentTarget).toggleClass('toggle');
    $('.toggle-section').slideToggle()
});
