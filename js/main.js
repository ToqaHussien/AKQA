


/* first Menu  */
var firstMenu = ["Bedingungen", "Behandlungen", "Veranstaltungen", "Werkzeuge", "Forschung und Erkenntnisse"];
var menuLinks = '';
for (var i = 0; i < firstMenu.length; i++) {

    menuLinks = menuLinks + "<li class='menu-items'><a href='#'>" + firstMenu[i] + "</a></li>"
}
document.getElementById("first-menu").innerHTML = menuLinks;
document.getElementById("first-menu-mobile").innerHTML = menuLinks;

/* second Menu  */
var secondMenu = ["Adtralza", "Diavonex", "Diavobet", "Enstilar", "Fucidin", "Kyntheum", "Kyntheum", "Kyntheum", "Protopic", "Skinoren", "Tralokinumab", "Xamiol"];
var secondMenuLinks = '';
for (var i = 0; i < secondMenu.length; i++) {

    secondMenuLinks = secondMenuLinks + "<li class='menu-items'><a  href='#'>" + secondMenu[i] + "</a></li>"
}
document.getElementById("second-menu").innerHTML = secondMenuLinks;
document.getElementById("second-menu-mobile").innerHTML = secondMenuLinks;

/* third Menu  */

var thirdMenu = ["Overview", "Mode of Action", "Efficacy", "Quality of Life", "Safety", "Dosing", "News", "Technical Information"];
var thirdMenuLinks = '';
for (var i = 0; i < thirdMenu.length; i++) {

    thirdMenuLinks = thirdMenuLinks + "<li class='menu-items'><a href='#'>" + thirdMenu[i] + "</a></li>"
}
document.getElementById("third-menu").innerHTML = thirdMenuLinks;
document.getElementById("third-menu-mobile").innerHTML = thirdMenuLinks;

/* Footer */

var footerMenu = ["Contact", "Imprint", "Conditions", "Terms of use", "Privacy", "Cookie content"];
var footerMenuLinks = '';
for (var i = 0; i < footerMenu.length; i++) {

    footerMenuLinks = footerMenuLinks + "<li class='menu-items'><a href='#'>" + footerMenu[i] + "</a></li>"
}
document.getElementById("footer-menu").innerHTML = thirdMenuLinks;

/* Mobile Menu */

function toggle() {
    document.getElementById('menu-div-list').classList.toggle('slideUp')
}