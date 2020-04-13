//全屏上下滚动
$(function(){
	var oDiv = $('#index .main-l');
	$("#index .itemTop").eq(0).addClass("animated fadeInDown");
	function move(indexOn){
		$("#index .itemTop").removeClass("animated fadeInDown")
		var num=$("#index .left-point li").length;
			num=num-1;
		if(indexOn<0){
			indexOn=num
		}else if(indexOn>num){
			indexOn=0
		}
		$("#index .left-point li").eq(indexOn).addClass("active").siblings().removeClass("active");
		var unitHeight=Math.floor($("#index .item").height());
		var move=indexOn*unitHeight*-1;
		$(window).unbind('scroll');
		$(".main-l").stop().animate({ marginTop:move }, 'slow',function(){
			$("#index .itemTop").eq(indexOn).addClass("animated fadeInDown");
			if(indexOn==2){
				$("#index .e-detial-l .animated").addClass("bounceInLeft");
				$("#index .e-detial-r .animated").addClass("bounceInRight")
			}
		});
	}
	$("#index .left-point li").click(function(){
		var index=$(this).index();
		move(index);
	})
	//鼠标滚动
	function onMouseWheel(event) {/*当鼠标滚轮事件发生时，执行一些操作*/
		var ev = event || window.event;
		var down=true
		if(event.originalEvent.deltaY<0){
			down=false
		}
		//var down=delta > 0 ? false : true;
		var indexOn=$("#index .left-point li.active").index();
		if(down){
			indexOn++;
		}else{
			indexOn--;
		}
		move(indexOn)
		// if(ev.preventDefault){/*FF 和 Chrome*/
		//  	ev.preventDefault();// 阻止默认事件
		// }
		return false;
	}
	//节流
	var candu=true;
	function throttle (callback, time) {
	  if(!candu){
		return false;
	  }
	  candu=false;
	  timer=setTimeout(function(){
		  callback && callback()
		  clearTimeout(timer)
		  candu=true
	  }, time || 300)
	}
	if (navigator.userAgent.indexOf("Firefoox") != -1) {
		$(window).on('DOMMouseScroll',onMouseWheel);
	}else{
		$(window).on('mousewheel',function(event){
			throttle(function(){
				onMouseWheel(event)
			},500)
		});
	}
})
//轮播
$(function(){
	var itemL=$("#index .works .w-item").length;
	var unitL=225;
	var mMax=unitL*(itemL-4);
	var mMin=0;
	var moveL=0;
	var timer;
	auto()
	$("#index .works .work-left").click(function(){
		moveL=moveL-unitL;
		moveL=move(moveL);
	})
	$("#index .works .work-right").click(function(){
		moveL=moveL+unitL;
		moveL=move(moveL);
	})
	$("#index .works-l,#index .works .iconfont").hover(function(){
		clearTimeout(timer);
	},function(){
		auto();
	})
	function auto(){
		timer=setInterval(function(){
			moveL=moveL+unitL;
			moveL=move(moveL);
		},3000)
	}
	function move(moveL){
		if(moveL>mMax){
			moveL=0;
		}else if(moveL<mMin){
			moveL=mMax;
		}
		$("#index .works-l").stop().animate({ marginLeft:(moveL*-1) }, 'slow');
		return moveL;
	}
})
