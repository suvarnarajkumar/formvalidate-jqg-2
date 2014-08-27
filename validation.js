/* ONLOADING */
$(document).ready(function(){
	
/* BACKGROUND COLOR EFFECT */
(function($) {
 $.fn.MessageBox = function(x) {
  $("body").css("background-color",x);
 };
})(jQuery);
$('#status2 a').click(function(){	
			location.reload();
});
});


/* ON SUBMIT CHECK ALL FIELDS ARE FILLED OR NOT*/
(function($) {
 $.fn.pageRedirect = function() {
	if($('progress').val() === 100)
	{
		$('#status1').hide();
		$('#status').hide();
		$('#status2').show();
		return false;
	}
	else
	{
		$('#status1').hide();
		$('#status2').hide();
		$('#status').show();
		return false;
	}
};
})(jQuery);



