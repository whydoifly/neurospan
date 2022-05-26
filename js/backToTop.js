var btn = $('#topBack'),
  windowHeight = $(document).height();
function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}
function scrollToBottomMobile() {
  window.scrollTo(500, document.body.scrollHeight);
}
$(window).scroll(function () {
  $(window).scrollTop() > 300 ? btn.addClass('show') : btn.removeClass('show'),
    // $(window).scrollTop() > 8500 && btn.removeClass('show'),
    windowHeight - $(window).scrollTop() < 900 && btn.removeClass('show');
}),
  btn.on('click', function (o) {
    o.preventDefault(), $('html, body').animate({ scrollTop: 0 }, '300');
  })
