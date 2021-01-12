$(document).ready(function(){
	
	/* globals start */
	$("img[data-src*=template]").click(function(){
		$(".fixed-bottom").show(300);
		var src=$(this).attr("data-src")+".html";
		$("iframe").attr("src",src);
		
	});
	$(".thisClose").click(function(){
		$(this).parent().hide(300);
	});
	/* globals end */
	
	
	/* template 2 start */
	$(".template-2 [data-toggle]").click(function(){
		var src=$(this).attr("data-toggle");
		//$("[data-target!="+src+"]").removeClass("active");
		$("[data-target]").each(function(){
			if($(this).attr("data-target")!=src){
				$(this).removeClass("active");
			}
		});
		$("[data-target*="+src+"]").toggleClass("active");
	})
	
	$(".template-2 .btn").click(function(){
		$(".template-2 .btn").removeClass("active");
		if(!$(this).hasClass("rounded-circle")){
			$(this).addClass("active");
		}	
	});
	/* template 2 end */
	
	
	
	/* close all */
	/* $(document).click(function(e){
		var src=e.target.getAttribute("data-toggle");
		$("[data-target!="+src+"]").removeClass("active");
	})
	 */
	
});
