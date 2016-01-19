(function(){
  // 'use strict';

  /* code here! */
  $('.step-next').on('touchend', function(e){
  	e.preventDefault();
  	var $step = $('.step'),
  			$p = $step.find('p'),
  			length = $p.length,
  			index = $step.find('.active').index();

  	if (index < length - 1) {
  		$p.eq(index).removeClass('active');
  		$p.eq(index+1).addClass('active');
  	} else if (index == length - 1) {
  		$(this).parent().hide();
  	} else {
  		console.log('js error');
  	}
  });

  $('.mixed').on('touchend', function(e){
  	e.preventDefault();
  	$('article').addClass('active');
  });
})();
