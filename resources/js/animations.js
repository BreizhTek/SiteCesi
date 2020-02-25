$(function () { // wait for document ready

    gsap.from("body", {x: -2000, duration: 0.8});
    let tl = gsap.timeline();
    tl.pause();
    tl.from("#menuMobile", {opacity: 100, x: 2000, duration: 0.8});
    tl.from('#optionsMobile1', {fontSize: 800, y: 2000, duration: 0.3}, ">-0.45");
    tl.from('#optionsMobile2', {fontSize: 800, y: 2000, duration: 0.3}, ">");
    tl.from('#optionsMobile3', {fontSize: 800, y: 2000, duration: 0.3}, ">");
    tl.from('#optionsMobile4', {fontSize: 800, y: 2000, duration: 0.3}, ">");

    $('#menuMobile').hide();

    $('#Open').click(function() {
        $('body').addClass('overflow-hidden');
        $('#Open').addClass('hidden');
        $('#Close').removeClass('hidden');
        $('#menuMobile').show();
        tl.restart();
    })

    $('#Close').click(function () {
        $('body').removeClass('overflow-hidden');
        $('#Close').addClass('hidden');
        $('#Open').removeClass('hidden');
        $('#menuMobile').hide();
    })

    var controller = new ScrollMagic.Controller({loglevel: 3});

    new ScrollMagic.Scene({
        triggerElement: "#trigger-features",
        offset: 50 // move trigger to center of element
    })
        .setClassToggle("#features", "visible") // add class to reveal
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
});