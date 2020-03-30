homePage.controller('mine', function($scope){
	var mineObj = $scope.mineObj = {
		
	};
	mineObj.leftOption='我的资料';
	/*mine假数据*/
	mineObj.myProfile={
		name:"生如花",
		headerPor:"img/headerPor.jpg",
		signature:"分享经验，交流思想",
		gender:"女",
		phnoe:1123467890,
		email:"64747@qq.com",
		passWord:"123456"
	};
	mineObj.myFootprint=[
		[
			{img:"img/essays/essaysImg1.jpg",title:'"UX" 将会是下一个 Buzzword?',reference:"AKER",time:"2015-10-29 17:17",describe:"不知道从何时开始,用户体验 ( UX ) 这个名词已经变得如此多见了,但是人们真正的认识、认清了什么是用户体","good":132,"comments":45},
			{img:"img/essays/essaysImg2.jpg",title:"色彩如何影响 UX 和用户行为",reference:"UX未来 ",time:"2016-10-20 09:14",describe:"色彩：设计得当时你可能从未关注过它 - 但是设计不得当时呢？无论是过亮且灼眼的背景，或者暗灰色背景下的黑色文字，还是以次充好的色彩选择都足以毁掉一款功能强大的... ","good":132,"comments":45}
		],[

			{img:"img/books/begin1.jpg",name:'点石成金',describe:"可用性设计是Web设计中最重要也是最困难的一项任务。《点石成金》的作者根据自己多年从业的经验，剖析用户的心理，在用户使用的模式、为浏览进行设计、导航设计、主页布局、可用性测试等方面提出了许多独特的观点，并给出了大量简单、易行的可用性设计的建议。这本书短小精悍，语言轻松诙谐，书中穿插大量色彩丰富的屏幕截图、趣味丛生的卡通插图以及包含大量信息的图表，使枯燥的设计原理变得平易近人。","good":132,"comments":45},
			{img:"img/books/begin2.jpg",name:"交互设计指南",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-8章中，贯穿了一个能够广泛应用于各种项目的通用设计流程，能够帮助新手设计师按序将所有信息应用于实践。书中还有一些对交互设计领域的开创者和名人的访谈，可以让我们从多个角度对交互设计有一个深刻全面的认识。","good":132,"comments":45},
		],[
			{id:"video1",img:"img/video/videoImg1.jpg",name:'深度访谈的十二招技巧',duration:"3小时7分",update:"7-14"},
			{id:"video2",img:"img/video/videoImg2.jpg",name:'先有用户体验再有交互设计',duration:"3小时7分",update:"7-14"},
			
		]
	];
	mineObj.myRelease=[
		{id:0,img:"img/question/headerPor2.jpg",title:"不知道学习用户体验的方法？",publisher:"明雪1",respondents:"生如花",time:"2015-10-29 17:17",describe:"最近看到过用户体验的相关文章，对用体验很有兴趣，希望学习一下如何更了解用户，做出的产品能够更符合用户，得到用户的青睐。但是之前从未接触过用户体验，不知道学习方法，希望各位大神给点意见。","good":132,"comments":45},
		{id:1,img:"img/question/headerPor3.jpg",title:"不知道学习用户体验的方法？",publisher:"明雪2",respondents:"生如花",time:"2015-10-29 17:17",describe:"最近看到过用户体验的相关文章，对用体验很有兴趣，希望学习一下如何更了解用户，做出的产品能够更符合用户，得到用户的青睐。但是之前从未接触过用户体验，不知道学习方法，希望各位大神给点意见。","good":132,"comments":45},
	];
	/*点击左边选项*/
	(function(){
		$minerLeftOptions=$(".minerLeftOptions");
		$minerLeftOptions.click(
			function(){
				$(this).addClass("white-bg");
				$(this).siblings().removeClass("white-bg");
			}
		)
	})();
});