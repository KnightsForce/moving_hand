(function($){

  var messageSms = $('#messageSms');

//-----------------------iphone------------------------------------------------

  var iphone=$('.iphone');
  var phoneButton=$('.phoneButton');

  var phonePos = iphone.offset();
  var phoneButtonPos = phoneButton.offset();

  var previousX = X;
  var previousY = Y; 

  var X;
  var Y;
  $(document).mousemove(changePhonePosition)

  function changePhonePosition(e) {
    X=e.screenX;
    Y=e.screenY;
    iphone.css({'top': phonePos.top+Y/80, 'left': phonePos.left+X/90,});
    phoneButton.css({'top': phoneButtonPos.top-phonePos.top-Y/50, 'left': phoneButtonPos.left-phonePos.left-X/70,});

    previousX = X;
    previousY = Y;
  }

//------------------------------smsBlock------------------------------------------


setInterval(function(){replaceSms()},20000)

function replaceSms() {
  var firstSms = $('.sms:first', messageSms);
  var widthSms = firstSms.outerWidth(true);
  console.log(widthSms);
    messageSms.animate({'left': '-='+widthSms}, {'duration': 500, 'complete': function(){appendFirst()}});

function appendFirst() {
messageSms.append(firstSms);
messageSms.css('left', '+='+widthSms);
}

}



})(jQuery);