$(document).ready( function(){
	//hoverPage
	(function(){
		$page=$("#pageName div a");
		$page.hover(
			function(){
				$(this).siblings().addClass("pageHover");
			},
			function(){
				$(this).siblings().removeClass("pageHover");
			}
		)
	})();
	//类型选着字体变大，小三角移动
	(function(){
		$text=$(".classificationText");
		$text.click(
			function(){
				$(this).addClass("classificationTextOn");
				$(this).siblings().removeClass("classificationTextOn");
			}
		);
	})();
	//手机点击导航收起
	(function(){
		$leftCenter=$(".leftCenter");
		$nav=$("#example-navbar-collapse");
		$leftCenter.click(
			function(){
				$nav.removeClass("in");
			}
		)
	})();
	(function(){
		$actionA=$(".action ul");
		$nav=$("#example-navbar-collapse");
		$actionA.click(
			function(){
				$nav.removeClass("in");
			}
		)
	})();
	//点击点赞数加一
	(function(){
		var heartDanger=0;
		$heart=$(".glyphicon-heart");
		$heart.click(
			function(){
				if(!heartDanger){
					$(this).addClass("text-dangerImportant");
					heartDanger=1;
				}else{
					$(this).removeClass("text-dangerImportant");
					heartDanger=0;
				}
			}
		);
	})();
})