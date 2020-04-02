$(function(){
	$("#side_nav p").click(function(){
		var index=$(this).index();
		$("#index-p .page").eq(index).addClass("pageOn").siblings().removeClass("pageOn")
	})
})