$(function() {
  var tabs = $('#features > nav a');
  var tabsContent = $('#features > nav > article > section');

  tabs.click(function(e) {
    e.preventDefault();

    var that = $(this);

    tabs.removeClass('is-selected');
    that.addClass('is-selected');
    tabsContent.removeClass('is-selected');

    tabsContent
      .filter((_i, tab) => $(tab).data('id') === that.data('id'))
    .addClass('is-selected');

  });

});
