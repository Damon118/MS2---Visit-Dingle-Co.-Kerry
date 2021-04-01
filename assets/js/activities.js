$('body').on('click', '[data-toggle="tab"]', function(e) {
  e.preventDefault();
  var $target = $($(this).data('target'));
  $('.tab-contents .tab').removeClass('active');
  $target.addClass('active');
});