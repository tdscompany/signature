$(document).ready(function(){
  new ClipboardJS('.js-copy');

  var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 13 ? '+00 (00) 00000.0000' : '+00 (00) 0000.00009';
  },
  spOptions = {
    onKeyPress: function(val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
      }
  };
  $('.phone_mask').mask(SPMaskBehavior, spOptions);

  $('.js-copy').click(function(){
    var text =  $(this).find('.text');
    text.text('Copiado!');
    setTimeout(function(){
      text.text('Copiar');
    },8000);
  });

  $('.form-info input').each(function(){

    $(this).keyup(function(e) {
      var input = ".js-" + $(this).attr('name');
      
      if(e.target.value === "") {
        $(input).text($(input).data('placeholder'));

        if(input === ".js-email"){
          $(input).attr('href', 'mailto:' + $(input).data('placeholder'));
        }

      } else {
        if(input === ".js-phone1"){
          $(input).text(e.target.value);
        } else {
          $(input).text(e.target.value);
        }

        if(input === ".js-email"){
          $(input).attr('href', 'mailto:' + e.target.value);
        }
        if(input === ".js-phone1" || input === ".js-phone2"){
          $(input).css('display', 'inline-block');
          $(input).attr('href', 'tel:' + e.target.value.replace(/\D/g,''));
        }
      }
    });
  });
  $('input[name="phone1"]').on('input', function () {
      if ($(this).val().trim()) {
        $('.br-phone1').show();
      } else {
        $('.br-phone1').hide();
      }
    });
});