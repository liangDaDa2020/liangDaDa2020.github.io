homePage.controller('essays', function($scope){
	var essaysObj = $scope.essaysObj = {
		
	};
	/*home假数据*/
	essaysObj.essaysList=[
		{img:"img/essays/essaysImg1.jpg",title:'"UX" 将会是下一个 Buzzword?',reference:"AKER",time:"2015-10-29 17:17",describe:"不知道从何时开始,用户体验 ( UX ) 这个名词已经变得如此多见了,但是人们真正的认识、认清了什么是用户体...","good":132,"comments":45},
		{img:"img/essays/essaysImg2.jpg",title:"色彩如何影响 UX 和用户行为",reference:"UX未来 ",time:"2016-10-20 09:14",describe:"色彩：设计得当时你可能从未关注过它 - 但是设计不得当时呢？无论是过亮且灼眼的背景，或者暗灰色背景下的黑色文字，还是以次充好的色彩选择都足以毁掉一款功能强大的... ","good":132,"comments":45},
		{img:"img/essays/essaysImg3.jpg",title:"色彩如何影响 UX 和用户行为",reference:"人人都是产品经理",time:"今天10:53",describe:"APP为了提供服务与内容，信用已经成了一种主流方式。但是，在各种服务如雨后春笋般蓬勃发展的市场上，怎样让你的移动应用更有帮助更具关联性，让用户流连忘返就非常有...","good":132,"comments":45},
		{img:"img/essays/essaysImg3.jpg",title:"色彩如何影响 UX 和用户行为",reference:"人人都是产品经理",time:"今天10:53",describe:"APP为了提供服务与内容，信用已经成了一种主流方式。但是，在各种服务如雨后春笋般蓬勃发展的市场上，怎样让你的移动应用更有帮助更具关联性，让用户流连忘返就非常有...","good":132,"comments":45},
		{img:"img/essays/essaysImg3.jpg",title:"色彩如何影响 UX 和用户行为",reference:"人人都是产品经理",time:"今天10:53",describe:"APP为了提供服务与内容，信用已经成了一种主流方式。但是，在各种服务如雨后春笋般蓬勃发展的市场上，怎样让你的移动应用更有帮助更具关联性，让用户流连忘返就非常有...","good":132,"comments":45},
		{img:"img/essays/essaysImg3.jpg",title:"色彩如何影响 UX 和用户行为",reference:"人人都是产品经理",time:"今天10:53",describe:"APP为了提供服务与内容，信用已经成了一种主流方式。但是，在各种服务如雨后春笋般蓬勃发展的市场上，怎样让你的移动应用更有帮助更具关联性，让用户流连忘返就非常有...","good":132,"comments":45}
	];
	$scope.information=[
		{title:"阅读排行",content1:"如何自学UX",content2:"UX设计作品展开说",content3:"UI,UE,UX三者区别",content4:"UX就业前景"},
		{title:"我的问题",content1:"UX与UI的区别",content2:"自学UX怎么开始",content3:"如何基于UX进行用户研究",content4:"UI的发展"},
		{title:"我的随笔",content1:"我看了用户体验要用",content2:"UX设计作品展开说",content3:"UI，UX，UE三者的区别",content4:"UX就业前景"},
		{title:"我所关注",content1:"UI的未来",content2:"人人都是产品经理",content3:"ZAKER",content4:"说多了都是泪"}
	];
	$scope.pageNum=2;
})