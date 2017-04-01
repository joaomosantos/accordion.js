$(function() {
  $('[data-callback]').accordion({
    onOpened: function(element) {
      $('.argument-callback').text(element.html());
      $('.argument-callback').css('color', 'orange');
      $('.status-callback').text('Is Opened');
      $('.status-callback').css('color', 'green');
    },
    onClosed: function(element) {
      $('.argument-callback').text(element.html());
      $('.argument-callback').css('color', 'orange');
      $('.status-callback').text('Is Closed');
      $('.status-callback').css('color', 'red');
    }
  });
});