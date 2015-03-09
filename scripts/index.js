jQuery(function($){
	$('#donation-countdown, #donation-countdown2').countdown('2015/03/15').on('update.countdown', function(event) {
	  var $this = $(this).html(event.strftime(''
	    + '<span class="time-item">%-w</span> week%!w '
	    + '<span class="time-item">%-d</span> day%!d '
	    + '<span class="time-item">%H</span> hr '
	    + '<span class="time-item">%M</span> min '
	    + '<span class="time-item">%S</span> sec'));
	});
});