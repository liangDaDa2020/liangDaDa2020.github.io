$(function(){
	//全屏滑动
	$("#index .left-point li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		var height=$(window).height();
		$("html").animate({'scrollTop':height*index}) 
	})
})