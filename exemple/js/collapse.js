$(function() {
  $('[data-multiple]').accordion({
    multipleCollapse: true // Value Default
  });

  $('[data-one]').accordion({
    multipleCollapse: false
  });
});