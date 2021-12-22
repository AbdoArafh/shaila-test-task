window.addEventListener("DOMContentLoaded", function() {
    var glider = new Glider(document.querySelector(".our-team .glider-contain .glider"), {
        slidesToShow: 'auto',
        slidesToScroll: 1,
        itemWidth: 300,
        dragVelocity: 1,
        arrows: {
            prev: ".glider-prev",
            next: ".glider-next"
        },
        draggable: true,
        scrollLock: true
    })
});