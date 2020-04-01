$(function(){
	//侧边导航
	(function(){
		var nav=$("#side_nav p");
		nav.each(function(index){
			$(this).click(function(){
				var inner=$("#inner"+index);
				var height=inner.offset().top;
				move(height);
			})
		})
		/* $(window).bind('scroll', function(){
			getAnchor()
		}); */
		function move(height){
			$('html, body').stop().animate({ scrollTop:height }, 'slow',function(){
						$(window).scroll(function() {
							//getAnchor();
						});
					});
		}
		function getAnchor(){
				var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				var top0=$(".tMain .cnt .left .proList").offset().top-56;
				if(scrollTop>=top0){
					$(".tMain .cnt .navigation").addClass("navigation2");
				}else{
					$(".tMain .cnt .navigation").removeClass("navigation2")
				}
				
				var topArr=[];
				var topArrL2=0;
				$(".tMain .cnt .proCnt").each(function(){
					if($(this).css("display")!="none"){
						var index=$(this).index();
						topArrL2++;
						topArr[index]=$(this).offset().top-56;
					}
				})
				var topArrL=topArr.length-1;
				for(var i=topArrL;i>(topArrL-topArrL2+1);i--){
					if(scrollTop<topArr[i] && topArr[i]){
						$(".tMain .cnt .navigation li").eq(i-1).addClass("sel").siblings("li").removeClass("sel");
					}
				}
				if(scrollTop>=topArr[topArrL]){
					$(".tMain .cnt .navigation li").eq(topArrL).addClass("sel").siblings("li").removeClass("sel");
				}
			}
	})()
})