$(function(){
// start of Code for sub lists section
$('li#photography a').on('click', function(){
    $('i#close-button').removeClass('close-button-off').addClass('close-button-on');
    $('ul#sub-lists').removeClass('inactive').addClass('active');
    $('li#blog').addClass('sub-activated');
    $('div#follow-link').addClass('during-sub-activated');
});
$('i#close-button').on('click', function(){
    $('i#close-button').removeClass('close-button-on').addClass('close-button-off');
    $('ul#sub-lists').removeClass('active').addClass('inactive');
    $('li#blog').removeClass('sub-activated');
    $('div#follow-link').removeClass('during-sub-activated');
});
// end of code for sub lists section

// start of responsive navbar section
var mobileNavbar = document.getElementById('navbar');
var responseButton = document.querySelector('div#response-button i');

function responsiveNavbar(){
    mobileNavbar.classList.toggle('afterClick');
    /*the if statement is for when the toggle closes the navbar will have an animation affect for disapearing*/
    if(mobileNavbar.getAttribute('class').value = 'beforeClick'){
      mobileNavbar.style.display = 'block';
    }
    /*for burger menu to change to cross*/
    var menuIcon = document.querySelectorAll('div#response-button span');
    menuIcon[0].classList.toggle('firstRotate');
    menuIcon[1].classList.toggle('middlehide');
    menuIcon[2].classList.toggle('thirdRotate');
}
responseButton.addEventListener('click', responsiveNavbar, false);

});