$(document).ready(function(e) {
  $('.btn').click(function(e) {
    $('#result').val($('#result').val() + $(this).val());

  });
  $('#clear').click(function(e) {
    $('#result').val('');
  });
  $('#calculate').click(function(e) {
    $('#result').val(eval($('#result').val()));
  });
});
