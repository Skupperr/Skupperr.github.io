$(function(){
    $('div#arrow-down i').on('click', function(){
        $('div#intro-section').addClass('intro-fade-out');
        $('div#main-section').removeClass('hide-content').addClass('show-content');
    });
});