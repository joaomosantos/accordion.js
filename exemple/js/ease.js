$(function() {
  var easing = ['back', 'bounce', 'circ', 'cubic', 'elastic', 'expo', 'linear', 'quad', 'quart', 'quint', 'sine', 'swing'];
  $.each(easing, function(index, value) {
    var data = '[data-' + value + ']';
    $(data).accordion({
      transitionSpeed: 1000,
      ease: value
    });
  });
});
