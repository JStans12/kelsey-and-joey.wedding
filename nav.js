
$(document).ready(function() {
  $('.nav-home').addClass('nav-active');

  $('.nav-item')
    .hover(function() {
      $(this).toggleClass('nav-hover');
    })
    .click(function(e) {
      $('.nav-item.nav-active').removeClass('nav-active');

      $(this).addClass('nav-active')
      $(this).find('.nav-active').toggleClass('nav-active');

      navigate($(this).data('target'));
    });
});

function navigate(target) {
  $('.page').addClass('hidden');
  $('.page.' + target).removeClass('hidden');
}
