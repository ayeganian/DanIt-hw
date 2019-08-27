const tabs = $('.tab');
$('.tabs-title').click((event) => {
    $('.active').removeClass('active');
    const clickedLi = $(event.target);
    clickedLi.addClass("active");
    tabs.each((elemIndex, el) => {
        $(el).addClass("tab-hidden");
        if ($(el).data("tab") === (clickedLi.data("tab"))) $(el).removeClass('tab-hidden');
    });
});
