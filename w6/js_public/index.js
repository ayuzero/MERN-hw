$(document).ready(function() {
    $('.Y').hide();
    $('.nav2').hide();
    $('.news').click(function () {
      $('body').removeClass('.X');
      $('.Y').show(1000);
      $('.nav1').hide();
      $('.nav2').show(1000);
      $('#main').hide();
    });
    $('.home').click(function () {
      $('.Y').hide();
      $('.X').show(1000);
      $('.nav2').hide();
      $('.nav1').show(1000);
      $('#main').show();
    });
});
