
/* (c) Vasso (vasso.etc@gmail.com) */


(function($) {
$(function() {

  $(window).resize(function() {
    // Parallax fix
    var $sectionHead = $('#section-head');
    var bgSize = Math.max($sectionHead.outerWidth(), $sectionHead.outerHeight()) +'px';
    bgSize = bgSize  +', '+ bgSize;
    $sectionHead.css('background-size', bgSize);
  });

  $(window).resize();


  // Parallax
  $('#section-head, #section-just-call, #section-request-call').each(function() {
    $(this).parallax('50%', 0.3, true);
  });


  // fotorama
  // $('#section-photo').click(function() {
  //   $.scrollTo($('#section-photo'), {axis:'y', duration:300});
  // });

  // fotorama
  $('#section-photo .fotorama').on(
    'fotorama:show',
    function (e, fotorama, extra) {
      if (extra.user) {
        $.scrollTo($('#section-photo'), {axis:'y', duration:300});
      }
    }
  );


  // request forms
  $('.request-form').submit(function(event) {
    event.preventDefault();

    var $form = $(this);
    var url = this.action;

    $.post(url, $form.serialize(), function() {
      alert(
        'Ваш запрос успешно отправлен!'+'\n'+
        'Мы с вами свяжемся в ближайшее время.'
      );
    },
    'json');
  });


  $('header menu a').click(function(event) {
    event.preventDefault();

    var hash = this.hash;
    history.pushState(null, null, hash);
    $.scrollTo($(hash), {axis:'y', duration:1000});
  });

});


$(window).load(function() {

  $(window).resize();

});
})(jQuery);
