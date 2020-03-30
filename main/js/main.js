//调用公共header,footer
/* var origin=window.location.origin;
origin+='/liangDaDa/trunk/';
$('#header').load(origin+'templates/header.html');
$(function(){
	var header=$('#header');
	var headerStr=header.html();
	var pageOn=pageOn;
	headerStr=headerStr.replace(/{link_origin}/g,origin);
	$('#header').html(headerStr);
	$('#header').show();
}) */
//当前页面
function hNavOn(pageOn){
	
	var header=$('#header');
	var pageOn=header.find(" #"+pageOn);
	pageOn.addClass("active").siblings().removeClass("active");
}

$(function(){
	//当前页面
	if(typeof(pageOn)!='undefined'){
		hNavOn(pageOn);
	}
	
})