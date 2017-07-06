$(function() {
  var collapse = { 'one': false, 'multiple': true };
  $.each(collapse, function(key, value) {
    var data = '[data-' + key + ']';
    $(data).accordion({
      multipleCollapse: value
    });
  });
});
