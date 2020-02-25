$(function () { // wait for document ready

    var scrollAnim = ['features', 'price'];

    console.log(scrollAnim.length);

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

    var controller = new ScrollMagic.Controller();

    for (let i = 0; i < scrollAnim.length; i++)
    {
        new ScrollMagic.Scene({
            triggerElement: "#trigger-"+scrollAnim[i],
            offset: 50, // move trigger to center of element
            reverse: false
        })
            .setClassToggle('#' + scrollAnim[i], "visible") // add class to reveal
            .addTo(controller);
    }

    var buttonUp = document.getElementById("btnUp"); // Button to allow to back to top page

// back to top of the page
    window.backToTop = function () {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollPosition > 0) {
            window.requestAnimationFrame(backToTop); // refresh the animation
            window.scrollTo(0, scrollPosition - scrollPosition / 12); // position, smooth
        }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});