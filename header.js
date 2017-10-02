/*
1. Kinni püüda scrollimise event
2. Vaata mis positsioonis on scrollimine
3. Kui scrollimine on 0 siis ta on topis ja siis eemaldame klassi scrolled.
4. Kui scrollimine on suurem kui 0, lisan klassi scrolled.
*/

var header = document.getElementById("header");
var body = document.getElementsByTagName("body")[0];

body.onscroll = function(){
    body.scrollTop;
    if (body.scrollTop == 0) {
        header.classList.remove("scrolled");
    } else {
        header.classList.add("scrolled");
    }
};


$(".home-button").click(function() {
    var scrollTop = $("#home").offset().top;
    $('body').animate({
        scrollTop: scrollTop
    }, 2000);
});

$(".about-button").click(function() {
    var scrollTop = $("#about").offset().top;
    $('body').animate({
        scrollTop: scrollTop
    }, 2000);
});

$(".projects-button").click(function() {
    var scrollTop = $("#projects").offset().top;
    $('body').animate({
        scrollTop: scrollTop
    }, 1500);
});

$(".contacts-button").click(function() {
    var scrollTop = $("#contacts").offset().top;
    $('body').animate({
        scrollTop: scrollTop
    }, 2000);
});

/*

var buttons = ["home", "about", "projects", "contacts"];


for (var i = 0; i < buttons.length;  i++) {
    var buttonSelector = "." + buttons[i] + "-button";
    var pageSelector = "#" + buttons[i];

    $(buttonSelector).click(function() {
        var scrollTop = $(pageSelector).offset().top;
        $('body').animate({
            scrollTop: scrollTop
        }, 2000);
    });
}
*/


