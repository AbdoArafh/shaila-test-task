window.addEventListener("DOMContentLoaded", function() {
    var glider = new Glider(document.querySelector(".glider"), {
        slidesToShow: 'auto',
        slidesToScroll: 1,
        itemWidth: 300,
        arrows: {
            prev: ".glider-prev",
            next: ".glider-next"
        },
        draggable: true,
        scrollLock: true
    })
});