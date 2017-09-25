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
