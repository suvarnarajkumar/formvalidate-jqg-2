
/*   .............THIS IS A GENERIC FORM VALIDATION IN JQUERY 
		THIS CAN BE DONE ONLY IF WE GIVE LABELS FOR THAT INPUT BOXES.............
*/
$(document).ready(function(){
	total=0;
	form_type=0;
	radio_temp=[];	
	radio=[];
	check_temp=[];	
	check=[];
	select_temp=[];	
	select=[];
	state=[];
	progress_counter=0;
	if($('progress:first').length >0)
	{
	if($('input[type=text]').length >0)
	{
		total+=$('input[type=text]').length;
	}
	if($('input[type=password]').length >0)
	{
		total+=$('input[type=password]').length;
	}
	if($('input[type=file]').length >0)
	{
		total+=$('input[type=file]').length;
	}
	if($('form input[type=radio]').length >0  )
	{
		$('form input[type=radio]').each(function(){ radio_temp.push($(this).attr("name")) });
		radio.push(radio_temp[0]);	
			
		for(var i=1;i<radio_temp.length;i++)
		{
			var count=0;
			for(var j=0;j<radio.length;j++)
			{
				if(radio_temp[i].localeCompare(radio[j])===0)
				{
					count=1;
					break;		
				}	
			}
			if(count===0)
			{ radio.push(radio_temp[i]); }	
		}	
		total+=radio.length;
	}		
	if($('form input[type=checkbox]').length >0  )
	{
		$('form input[type=checkbox]').each(function(){ check_temp.push($(this).attr("name")) });
		check.push(check_temp[0]);	
			
		for(var i=1;i<check_temp.length;i++)
		{
			var count=0;
			for(var j=0;j<check.length;j++)
			{
				if(check_temp[i].localeCompare(check[j])===0)
				{
					count=1;
					break;		
				}	
			}
			if(count===0)
			{ check.push(check_temp[i]); }	
		}	
		total+=radio.length;
	}
	if($('form select').length >0  )
	{
		$('form select').each(function(){ select_temp.push($(this).attr("name")) });
		select.push(select_temp[0]);	
			
		for(var i=1;i<select_temp.length;i++)
		{
			var count=0;
			for(var j=0;j<select.length;j++)
			{
				if(select_temp[i].localeCompare(select[j])===0)
				{
					count=1;
					break;		
				}	
			}
			if(count===0)
			{ select.push(select_temp[i]); }	
		}	
		total+=select.length;
	}
	}
	if($('input').siblings("label").length>1)
	{
		form_type=1;
	}
	else if($('input').parent().siblings().find("label").length>1)
	{
		form_type=2;
	}
	$("input[type=text],input[type=password],input[type=file]").blur(function(){
		
  	if($(this).next("p").length ===0)
  	{	$(this).after("<p></p>");	}
  	if($(this).val().length ===0 ) 
	{
		$().progressDecreamentValidation(this);	
		$(this).next("p").text("Please fill this field");
		if($(this).attr("type") !=='text')
		{
		if($(this).parents(":first").next().find("input[type=password]").length>0)
		{
			$(this).val("");
			$(this).parents(":first").next().find("input[type=password]").focus();
		}
		else if($(this).parentsUntil(":first").next().find("input[type=password]").length>0)
		{
			$(this).val("");			
			$(this).parentsUntil(":first").next().find("input[type=password]").focus();
		}			
		}
	}  
	else
   {
   	var email=/^.*(E-MAIL|E-Mail|e-mail|email|EMAIL|Email|EMail|MAIL|Mail|mail)+.*\*$/;
   	var pwd=/^.*(password|pwd|passwd|PASSWORD|PWD|PASSWD|Password|Pwd|Passwd)+.*\*$/;
   	var pwd1=/^.*(Cfm|cfm|CFM|Confirm|CONFIRM|confirm|CONFM|Confm|confm)+.*\*$/;
   	var cfm_pwd=/^.*(C|c)+.*(password|pwd|passwd|PASSWORD|PWD|PASSWD|Password|Pwd|Passwd|Pd|pd|PD)+.*\*$/;
		var user_name=/^.*(User|USER|user)+.*(Name|NAME|name|id|ID|Id)+.*\*$/;
		var first_name=/^.*(First|first|FIRST|FST|Fst|fst|FT|ft|Ft|FS|Fs|fs)+.*(Name|NAME|name|NM|nm|Nm)*.*\*$/;
		var last_name=/^.*(Last|last|LAST|LST|Lst|lst|Ls|LS|ls|lt|Lt|LT)+.*(Name|NAME|name|NM|nm|Nm)*.*\*$/;
		var phone_num=/^.*(PHONE|Phone|phone|PHNO|Phno|phno|PH|Ph|ph|CONTACT|Contact|contact|MOBILE|Mobile|mobile|mob|MOB|Mob)+.*(NO|No|no|NUM|Num|num|NUMBER|Number|number)*.*\*$/;
		if($(this).siblings("label").text().match(user_name) && form_type===1)
		{
			$().textBoxValidation(this,"UserName should be 5 to 8 alphanumeric and don't start with number",/^[a-zA-Z][a-zA-Z\d]{4,7}$/);
		}	
		else if($(this).parent().siblings().find("label").text().match(user_name) && form_type===2)
		{
			$().textBoxValidation(this,"UserName should be 5 to 8 alphanumeric and don't start with number",/^[a-zA-Z][a-zA-Z\d]{4,7}$/);
		}			
		if($(this).siblings("label").text().match(first_name) && form_type===1)
		{
			$().textBoxValidation(this,"First name should be 2 to 6 characters without spaces.",/^[a-zA-Z]{2,6}$/);
		}
		else if($(this).parent().siblings().find("label").text().match(first_name) && form_type===2)
		{
			$().textBoxValidation(this,"First name should be 2 to 6 characters without spaces.",/^[a-zA-Z]{2,6}$/);
		}
		if($(this).siblings("label").text().match(last_name) && form_type===1)
		{
			$().textBoxValidation(this,"First name should be 2 to 6 characters without spaces.",/^\S[a-zA-Z\. ]{0,15}\S$/);
		}
		else if($(this).parent().siblings().find("label").text().match(last_name) && form_type===2)
		{
			$().textBoxValidation(this,"First name should be 2 to 6 characters without spaces.",/^\S[a-zA-Z\. ]{0,15}\S$/);
		}
		if($(this).siblings("label").text().match(phone_num) && form_type===1)
		{
			$().textBoxValidation(this,"Phone number should be in this format '+99 (999)-999-9999'." ,/^\+\d\d \(\d\d\d\)-\d\d\d-\d\d\d\d$/);
		}	
		else if($(this).parent().siblings().find("label").text().match(phone_num) && form_type===2)
		{
			$().textBoxValidation(this,"Phone number should be in this format '+99 (999)-999-9999'." ,/^\+\d\d \(\d\d\d\)-\d\d\d-\d\d\d\d$/);
		}	
		if($(this).siblings("label").text().match(email)  && form_type===1)
		{
			$().textBoxValidation(this,"Please enter Valid 'E-MAIL' end's with '.com'." ,/^[A-Za-z0-9]+[\._A-Za-z0-9]*@[A-Za-z0-9]+.(com)$/);
		}
		else if($(this).parent().siblings().find("label").text().match(email) && form_type===2)
		{
			$().textBoxValidation(this,"Please enter Valid 'E-MAIL' end's with '.com'." ,/^[A-Za-z0-9]+[\._A-Za-z0-9]*@[A-Za-z0-9]+.(com)$/);
		}
		if(($(this).siblings("label").text().match(pwd)) && (!$(this).siblings("label").text().match(pwd1)) && form_type===1)
		{
			$().textBoxValidation(this,"Password should be 4 to 6 atleast one lowercase, uppercase, number, special character(@,#)",/^(?=.*\d.*)(?=.*[a-z].*)(?=.*[@#].*)(?=.*[A-Z].*)[a-zA-Z0-9@#]{4,6}$/);
		}
		else if(($(this).parent().siblings().find("label").text().match(pwd)) && (!$(this).parent().prev().find("label").text().match(pwd1)) && form_type===2)
		{
			$().textBoxValidation(this,"Password should be 4 to 6 atleast one lowercase, uppercase, number, special character(@,#)",/^(?=.*\d.*)(?=.*[a-z].*)(?=.*[@#].*)(?=.*[A-Z].*)[a-zA-Z0-9@#]{4,6}$/);
		}
		if($(this).siblings("label").text().match(cfm_pwd) && form_type===1 ) 
		{			
			var pattern=new RegExp("^("+$('input[type=password]:first').val()+"){"+1+"}$");
			$().textBoxValidation(this,"Confirm Password should not be different from above password",pattern);
		}
		else if($(this).parent().siblings().find("label").text().match(cfm_pwd)  && form_type===2)
		{			
			var pattern=new RegExp("^("+$('input[type=password]:first').val()+"){"+1+"}$");
			$().textBoxValidation(this,"Confirm Password should not be different from above password",pattern);
		}
	}	
 });
 
$("input[type=file]").change(function(){
  	if($(this).next("p").length ===0)
  	{	$(this).after("<p></p>");	}
  	if($(this).val().length ===0 ) 
	{
		$().progressDecreamentValidation(this);
		$(this).next("p").text("Please fill this field");$(this).focus();
	}  
	else
   {
   	var file_name=/^.*(Upload|UPLOAD|upload|UPLD|Upld|upld|Pic|PIC|pic|Picture|PICTURE|picture|Profile|PROFILE|profile)+.*(Pic|PIC|pic|Picture|PICTURE|picture|Upload|UPLOAD|upload|UPLD|Upld|upld)*.*\*$/;
		if($(this).siblings("label").text().match(file_name))
		{
			$().textBoxValidation(this,"File should be .jpg/.png/.gif format image",/^.*(\.jpg|\.gif|.png)$/);
		}
		else if($(this).parent().prev().find("label").text().match(file_name))
		{
			$().textBoxValidation(this,"File should be .jpg/.png/.gif format image",/^.*(\.jpg|\.gif|.png)$/);
		}
	}
  });
  $("input[type=checkbox]").blur(function(){
  		$().checkboxButtonValidation(this);
  });
  $("input[type=checkbox]").click(function(){
  		$().checkboxButtonValidation(this);
  });
  $("select").blur(function(){
  		$().selectBoxValidation(this);
  });
  $("select").change(function(){
  		$().selectBoxValidation(this);
  });
  $("input[type=radio]").blur(function(){
  		$().radioButtonValidation(this);
  });
  $("input[type=radio]").click(function(){
  		$().radioButtonValidation(this);
  });
});

(function($) {
 $.fn.checkboxButtonValidation = function(obj) {
 			var check=$(obj).attr("name");
 			
			if($('input[name='+check+']').next("p").length ===0)
  				{	$('input[name='+check+']:last').after("<p></p>");	} 	   	
 	   	if($('input[name='+check+']:checked').length===0)
 	   	{
 	   		$('input[name='+check+']:last').next("p").text("Please select any one of the above."); 
 	   		$().progressDecreamentValidation(obj);	 				
 	   	}
 	   	else
 	   	{
 	   		$('input[name='+check+']:last').siblings("p").remove();
 	   		$().progressIncreamentValidation(obj);
 	   	}
};
})(jQuery);

(function($) {
 $.fn.selectBoxValidation = function(obj) {
 			$(obj).siblings("p").remove();			
			var check; 
 			if($(obj).next('select').length>0)
 			{	check=$(obj).siblings().last('select');}
 			else 
 			{	check=$(obj);	}
			if($(obj).siblings("p").length ===0)
  				{	$(check).after("<p></p>");	} 	   	
 	   	var values = $(obj).val();
 	   	if(values === "" || values === null || values.length===0 )
			{
				$(check).siblings("p").text("Please select.");
							
			}
 	   	else
 	  		{
 	  			$(obj).siblings("p").remove();
				var progress_bar=1;var prog_num=1+$(obj).siblings('select').length;
				if(progress_bar === prog_num)
				{
					$().progressIncreamentValidation(obj);	
				} 
				else
				{	
 	 					$.each($(obj).siblings('select'),function(){
 	 						var vals=$(this).val();
 	   						if(vals !== null)
								{	progress_bar++;	}
 	 					
 	 					});
 	 					if(progress_bar === prog_num)
						{
							$().progressIncreamentValidation(obj);
						} 
 	 			} 	 
 	 		}
};
})(jQuery);

(function($) {
 $.fn.radioButtonValidation = function(obj) {
 				$(obj).siblings("p").remove();
 				$().progressIncreamentValidation(obj);
  				
};
})(jQuery);

/* INPUT TYPE FOR TEXT, PASSWORD, FILE VALIDATION */
(function($) {
 $.fn.textBoxValidation = function(obj,msg,pttn) {

		if(!$(obj).val().match(pttn))
		{					
				$(obj).next("p").text(msg);
				$().progressDecreamentValidation(obj);
				$(obj).val("");
				$(obj).focus();
				return;
		}
		else
		{				
				$(obj).next("p").remove();
				$().progressIncreamentValidation(obj);
				return;
		}
};
})(jQuery);

(function($) {
 $.fn.progressIncreamentValidation = function(obj) {
 				if($('progress:first').length >0)
				{
					if(state.length===0)
					{
					if($(obj).siblings("label").length>0)
						{state.push($(obj).siblings("label").text());}
					else if($(obj).parentsUntil(':first').siblings("label").length>0)
					{state.push($(obj).parentsUntil(':first').siblings("label").text());}
					else if($(obj).parentsUntil(":first").siblings().find("label").length>0)
					{state.push($(obj).parentsUntil(':first').siblings().find("label").text());}
					}
					var count=0;
					for(var j=0;j<state.length;j++)
					{
						if($(obj).siblings("label").length>0)
						{
							if(state[j].localeCompare($(obj).siblings("label").text())===0)
							{
							count=1;
							break;		
							}	
						}
						else if($(obj).parentsUntil(':first').siblings("label").length>0)
						{
							if(state[j].localeCompare($(obj).parentsUntil(':first').siblings("label").text())===0)
							{
							count=1;
							break;		
							}
						}
						else if($(obj).parentsUntil(':first').siblings().find("label").length>0)
						{
							if(state[j].localeCompare($(obj).parentsUntil(':first').siblings().find("label").text())===0)
							{
							count=1;
							break;		
							}
						}
					}					
					if(count===0)
					{ 
						if($(obj).siblings("label").length>0)
							{state.push($(obj).siblings("label").text());}
						else if($(obj).parentsUntil(':first').siblings("label").length>0)
							{state.push($(obj).parentsUntil(':first').siblings("label").text());}
						else if($(obj).parentsUntil(':first').siblings().find("label").length>0)
							{state.push($(obj).parentsUntil(':first').siblings().find("label").text());}
					}
					$('progress').attr("value",(state.length)*(100/total));$('progress').siblings('p').text((Math.floor((state.length)*(100/total)))+"%");
					}
};
})(jQuery);

(function($) {
 $.fn.progressDecreamentValidation = function(obj) {
 				if($('progress:first').length >0)
				{
					if($(obj).siblings("label").length>0)
					{
							if(state.length>0 && $.inArray($(obj).siblings("label").text(),state) != -1)
							{
								state.splice($.inArray($(obj).siblings("label").text(),state),1);					
							}
					}				
					else if($(obj).parentsUntil(':first').siblings("label").length>0)
					{
							if(state.length>0 && $.inArray($(obj).parentsUntil(':first').siblings("label").text(),state) != -1)
							{
								state.splice($.inArray($(obj).parentsUntil(':first').siblings("label").text(),state),1);					
							}
					}
					else if($(obj).parentsUntil(':first').siblings().find("label").length>0)
					{
								if(state.length>0 && $.inArray($(obj).parentsUntil(':first').siblings().find("label").text(),state) != -1)
								{
									state.splice($.inArray($(obj).parentsUntil(':first').siblings().find("label").text(),state),1);					
								}
					}
					$('progress').attr("value",(state.length)*(100/total));$('progress').siblings('p').text((Math.floor((state.length)*(100/total)))+"%");
				}
};
})(jQuery);