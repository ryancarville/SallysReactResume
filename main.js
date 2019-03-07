$(document).ready(function(){
    educationMenu();
    contactMenu();
    bioMenu();
    workMenu();
    workCloseAll();
    bioCloseAll();
    contactCloseAll();
    edCloseAll();
  });

function educationMenu() {
    $(".educationContent").click(function(){
        $('.educationContent').toggleClass('expand');
        
    });
}
function contactMenu() {
    $(".contactContent").click(function(){
        $('.contactContent').toggleClass('expandSm');
        
    });
}

function bioMenu() {
    $(".bioContent").click(function(){
        $('.bioContent').toggleClass('expand');
        
    });
}
function workMenu(){
    $(".workContent").click(function(){
        $('.workContent').toggleClass('expandBig');
        
    });
}
function workCloseAll(){
    $(".workContent").click(function(){
        $('.bioContent').removeClass('expand');
        $('.contactContent').removeClass('expandSm');
        $('.educationContent').removeClass('expand');
    });
}
function bioCloseAll(){
    $(".bioContent").click(function(){
        $('.workContent').removeClass('expandBig');
        $('.contactContent').removeClass('expandSm');
        $('.educationContent').removeClass('expand');
    });
}
function contactCloseAll(){
    $(".contactContent").click(function(){
        $('.bioContent').removeClass('expand');
        $('.workContent').removeClass('expandBig');
        $('.educationContent').removeClass('expand');
    });
}
function edCloseAll(){
    $(".educationContent").click(function(){
        $('.bioContent').removeClass('expand');
        $('.contactContent').removeClass('expandSm');
        $('.workContent').removeClass('expandBig');
    });
}