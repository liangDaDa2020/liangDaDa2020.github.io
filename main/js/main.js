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
}) 
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
	
})*/
//侧边菜单
$(function(){
	var navItemObj=$("#side_nav div p")
	var contentObj=$(".con_bar");
	var contentItemObj=$(".con_bar .inner");
	var itemHeightArr=[];
	contentItemObj.each(function(key,index){
		var height=$(this).offset().top;
		height=height-50;
		itemHeightArr[key]=height;
	})
	function move(indexOn){
		$(window).unbind("scroll")
		var height=itemHeightArr[indexOn];
		$('html, body').stop().animate({ scrollTop:height }, 'slow',function(){
			var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			$(window).bind('scroll', function(){
				getAnchor()
			});
		});
	}
	function getAnchor(){
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		var indexOn=0;
		for(var i=0;i<itemHeightArr.length;i++){
			if(scrollTop>=itemHeightArr[i] && scrollTop<itemHeightArr[i+1]){
				indexOn=i;
			}else if(scrollTop>=itemHeightArr[i] && i==0){
				indexOn=0;
			}else if(scrollTop>=itemHeightArr[i] && !itemHeightArr[i+1]){
				indexOn=i;
			}
		}
		navItemObj.eq(indexOn).addClass("nav-itemOn").siblings().removeClass("nav-itemOn");
	}
	
	navItemObj.click(function(){
		$(this).addClass("nav-itemOn").siblings().removeClass("nav-itemOn");
		var indexOn=$(this).index();
		move(indexOn)
	})
	getAnchor()
	$(window).bind('scroll', function(){
		getAnchor()
	});
})