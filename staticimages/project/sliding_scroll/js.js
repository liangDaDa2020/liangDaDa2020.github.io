$(function(){
	var navObj=$(".nav .nav-item");
	var contentObj=$(".content");
	var contentItemObj=$(".content .item");
	var navItemObj=$(".nav .nav-item")
	var itemHeightArr=[]
	contentItemObj.each(function(key,index){
		var height=$(this).offset().top;
		height=height-50;
		itemHeightArr[key]=height;
	})
	function move(indexOn){
		$(window).unbind("scroll")
		var height=itemHeightArr[indexOn];
		$('html, body').stop().animate({ scrollTop:height }, 'slow',function(){
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
	
	navObj.click(function(){
		$(this).addClass("nav-itemOn").siblings().removeClass("nav-itemOn");
		var indexOn=$(this).index();
		move(indexOn)
	})
	$(window).bind('scroll', function(){
		getAnchor()
	});
	
})