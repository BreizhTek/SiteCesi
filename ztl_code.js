var buttonUp = document.getElementById("btnUp"); // Button to allow to back to top page

window.onscroll = function() {
    buttonDisplay(); // To display the button "btnUp" / Top button
};

function buttonDisplay() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) { // if the user scroll more of the 40 first px
        buttonUp.style.display = "block"; // Display the button
    } else {
        buttonUp.style.display = "none"; // Stop display the button
    }
}

// back to top of the page
function backToTop () {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > 0) {
        window.requestAnimationFrame(backToTop); // refresh the animation
        window.scrollTo(0, scrollPosition - scrollPosition / 12); // position, smooth
    }
};



