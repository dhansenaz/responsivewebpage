let modal = document.getElementById('myModal');
let btn = document.getElementById('button');
let span = document.getElementsByName('close')[0];


$(function () {
    $('.menu-toggle, .fa-times').on('click', function () {
        $('nav').toggleClass('active');
        $('.overlay').toggleClass('menu-open')
    });  

    $('.overlay').on('click', function () {
        $('nav').removeClass('active');
        $(this).removeClass('menu-open');
    });  

});

btn.onclick = function() {
    modal.style.display = 'block'
}

span.onclick = function() {
    modal.style.display = 'none'
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}