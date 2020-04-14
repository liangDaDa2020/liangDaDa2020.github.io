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
//侧边菜单start
$(function(){
	var indexAside=new Asideright({
		aside:"#side_nav",
		content:"#side_content"
	})
	indexAside.init();
})
function Asideright(obj){
	this.aside=$(obj.aside);
	this.content=$(obj.content);
	this.navItemObj=this.aside.find(".sideItem");
	this.contentItemObj=this.content.find(".inner");
	this.itemHeightArr=[];
	this.indexOn=0;
}
Asideright.prototype.init=function(){
	var This=this;
	this.contentItemObj.each(function(key,index){
		var height=$(this).offset().top;
		height=height-50;
		This.itemHeightArr[key]=height;
	})
	this.getAnchor()
	$(window).bind('scroll', function(){
		this.getAnchor()
	});
	
	this.navItemObj.click(function(){
		$(this).addClass("nav-itemOn").siblings().removeClass("nav-itemOn");
		This.indexOn=$(this).index();
		This.move(This.indexOn)
	})
}
Asideright.prototype.move=function(){
	var This=this;
	$(window).unbind("scroll")
	var height=this.itemHeightArr[this.indexOn];
	$('html, body').stop().animate({ scrollTop:height }, 'slow',function(){
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		$(window).bind('scroll', function(){
			This.getAnchor()
		});
	});
}
Asideright.prototype.getAnchor=function(){
	var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	for(var i=0;i<this.itemHeightArr.length;i++){
		if(scrollTop>=this.itemHeightArr[i] && scrollTop<this.itemHeightArr[i+1]){
			this.indexOn=i;
		}else if(scrollTop>=this.itemHeightArr[i] && i==0){
			this.indexOn=0;
		}else if(scrollTop>=this.itemHeightArr[i] && !this.itemHeightArr[i+1]){
			this.indexOn=i;
		}
	}
	this.navItemObj.eq(this.indexOn).addClass("nav-itemOn").siblings().removeClass("nav-itemOn");
}
//侧边菜单end