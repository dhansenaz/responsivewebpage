let modal = document.getElementById('myModal');
let btn = document.getElementById('button');
let span = document.getElementsByClassName('close')[0];

$(function() {
  
    $('.dropdown > .caption').on('click', function() {
      $(this).parent().toggleClass('open');
    });
    
    $('.dropdown > .list > .item').on('click', function() {
      $('.dropdown > .list > .item').removeClass('selected');
      $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text( $(this).text() );
    });
    
    $(document).on('keyup', function(evt) {
      if ( (evt.keyCode || evt.which) === 27 ) {
        $('.dropdown').removeClass('open');
      }
    });
    
    $(document).on('click', function(evt) {
      if ( $(evt.target).closest(".dropdown > .caption").length === 0 ) {
        $('.dropdown').removeClass('open');
      }
    });
    
  });
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