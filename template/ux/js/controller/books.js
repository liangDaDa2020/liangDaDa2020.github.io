homePage.controller('books', function($scope){
	var booksObj = $scope.booksObj = {
		
	};
	booksObj.pageIndex=window.location.search.split('=')[1];
	booksObj.categoryIndex=1;
	booksObj.categoryClickParameter="";
	/*home假数据*/
	booksObj.category=[
		{name:"入门书籍",img:"img/books/category1.png",on:"booksObj.beginList"},
		{name:"用户研究",img:"img/books/category2.png",on:"booksObj.userList"},
		{name:"交互设计",img:"img/books/category3.png",on:"booksObj.interactionList"},
		{name:"视觉设计",img:"img/books/category4.png",on:"booksObj.visualList"},
	];
	booksObj.list=[
		[
			{img:"img/books/begin1.jpg",name:'点石成金',describe:"可用性设计是Web设计中最重要也是最困难的一项任务。《点石成金》的作者根据自己多年从业的经验，剖析用户的心理，在用户使用的模式、为浏览进行设计、导航设计、主页布局、可用性测试等方面提出了许多独特的观点，并给出了大量简单、易行的可用性设计的建议。这本书短小精悍，语言轻松诙谐，书中穿插大量色彩丰富的屏幕截图、趣味丛生的卡通插图以及包含大量信息的图表，使枯燥的设计原理变得平易近人。","good":132,"comments":45},
			{img:"img/books/begin2.jpg",name:"交互设计指南",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-8章中，贯穿了一个能够广泛应用于各种项目的通用设计流程，能够帮助新手设计师按序将所有信息应用于实践。书中还有一些对交互设计领域的开创者和名人的访谈，可以让我们从多个角度对交互设计有一个深刻全面的认识。","good":132,"comments":45},
			{img:"img/books/begin2.jpg",name:"交互设计指南",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-8章中，贯穿了一个能够广泛应用于各种项目的通用设计流程，能够帮助新手设计师按序将所有信息应用于实践。书中还有一些对交互设计领域的开创者和名人的访谈，可以让我们从多个角度对交互设计有一个深刻全面的认识。","good":132,"comments":45},
			{img:"img/books/begin2.jpg",name:"交互设计指南",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-8章中，贯穿了一个能够广泛应用于各种项目的通用设计流程，能够帮助新手设计师按序将所有信息应用于实践。书中还有一些对交互设计领域的开创者和名人的访谈，可以让我们从多个角度对交互设计有一个深刻全面的认识。","good":132,"comments":45},
			{img:"img/books/begin2.jpg",name:"交互设计指南",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-8章中，贯穿了一个能够广泛应用于各种项目的通用设计流程，能够帮助新手设计师按序将所有信息应用于实践。书中还有一些对交互设计领域的开创者和名人的访谈，可以让我们从多个角度对交互设计有一个深刻全面的认识。","good":132,"comments":45},
			{img:"img/books/begin2.jpg",name:"交互设计指南",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-8章中，贯穿了一个能够广泛应用于各种项目的通用设计流程，能够帮助新手设计师按序将所有信息应用于实践。书中还有一些对交互设计领域的开创者和名人的访谈，可以让我们从多个角度对交互设计有一个深刻全面的认识。","good":132,"comments":45},
		],
		[
			{img:"img/books/interaction1.jpg",name:'Observing the User Experience',describe:"The gap between who designers and developers imagine their users are, and who those users really are can be the biggest problem with product development. 'Observing the User Experience' will help you bridge that gap to understand what your users want and need from your product, and whether they'll be able to use what you've created. Filled with real-world experience and a wealt...","good":132,"comments":45},
			{img:"img/books/interaction2.jpg",name:"妙手回春",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-本书是作者Steve Krug继畅销书《点石成金：访客至上的网页设计秘笈》(Don't Make Me Think)后推出的又一力作。多年来，人们就认识到网站可用性测试可以极大地改善产品质量，但鉴于正规的可用性测试流程复杂、费用高昂，很少人这样做。在本书中，作者详细阐述了一种简化的网站可用性测试方法，让任何人都能够尽早并频繁地对其网站、应用程序和其他产品进行可用性测试，从而将最严重的可用性问题消灭在萌芽状态。","good":132,"comments":45},
			{img:"img/books/interaction2.jpg",name:"妙手回春",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-本书是作者Steve Krug继畅销书《点石成金：访客至上的网页设计秘笈》(Don't Make Me Think)后推出的又一力作。多年来，人们就认识到网站可用性测试可以极大地改善产品质量，但鉴于正规的可用性测试流程复杂、费用高昂，很少人这样做。在本书中，作者详细阐述了一种简化的网站可用性测试方法，让任何人都能够尽早并频繁地对其网站、应用程序和其他产品进行可用性测试，从而将最严重的可用性问题消灭在萌芽状态。","good":132,"comments":45},
			{img:"img/books/interaction2.jpg",name:"妙手回春",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-本书是作者Steve Krug继畅销书《点石成金：访客至上的网页设计秘笈》(Don't Make Me Think)后推出的又一力作。多年来，人们就认识到网站可用性测试可以极大地改善产品质量，但鉴于正规的可用性测试流程复杂、费用高昂，很少人这样做。在本书中，作者详细阐述了一种简化的网站可用性测试方法，让任何人都能够尽早并频繁地对其网站、应用程序和其他产品进行可用性测试，从而将最严重的可用性问题消灭在萌芽状态。","good":132,"comments":45},
			{img:"img/books/interaction2.jpg",name:"妙手回春",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-本书是作者Steve Krug继畅销书《点石成金：访客至上的网页设计秘笈》(Don't Make Me Think)后推出的又一力作。多年来，人们就认识到网站可用性测试可以极大地改善产品质量，但鉴于正规的可用性测试流程复杂、费用高昂，很少人这样做。在本书中，作者详细阐述了一种简化的网站可用性测试方法，让任何人都能够尽早并频繁地对其网站、应用程序和其他产品进行可用性测试，从而将最严重的可用性问题消灭在萌芽状态。","good":132,"comments":45},
		],
		[
			{img:"img/books/user1.jpg",name:'交互设计精髓',describe:"《About Face 4: 交互设计精髓》是《About Face 3：交互设计精髓》的升级版，此次升级把全书的结构重组优化，更加精练和易用；更新了一些适合当下时代的术语和实例，文字全部重新编译，更加清晰易读；增加了更多目标导向设计过程的细节，更新了现行实践，重点增加 移动和触屏平台交互设计，其实《About Face 4: 交互设计精髓》多数内容适用于多种平台。","good":132,"comments":45},
			{img:"img/books/user2.jpg",name:"Designing Interfaces",describe:"Designing a good interface isn't easy. Users demand software that is well-behaved, good-looking, and easy to use. Your clients or managers demand originality and a short time to market. Your UI technology -- Web applications, desktop software, even mobile devices - may give you the tools you need, but little guidance on how to use them well. UI designers over the years have ref...(原书第2版)》第3-8章中，贯穿了一个能够广泛应用于各种项目的通用设计流程，能够帮助新手设计师按序将所有信息应用于实践。书中还有一些对交互设计领域的开创者和名人的访谈，可以让我们从多个角度对交互设计有一个深刻全面的认识。","good":132,"comments":45},
			{img:"img/books/user2.jpg",name:"Designing Interfaces",describe:"Designing a good interface isn't easy. Users demand software that is well-behaved, good-looking, and easy to use. Your clients or managers demand originality and a short time to market. Your UI technology -- Web applications, desktop software, even mobile devices - may give you the tools you need, but little guidance on how to use them well. UI designers over the years have ref...(原书第2版)》第3-8章中，贯穿了一个能够广泛应用于各种项目的通用设计流程，能够帮助新手设计师按序将所有信息应用于实践。书中还有一些对交互设计领域的开创者和名人的访谈，可以让我们从多个角度对交互设计有一个深刻全面的认识。","good":132,"comments":45},
			{img:"img/books/user2.jpg",name:"Designing Interfaces",describe:"Designing a good interface isn't easy. Users demand software that is well-behaved, good-looking, and easy to use. Your clients or managers demand originality and a short time to market. Your UI technology -- Web applications, desktop software, even mobile devices - may give you the tools you need, but little guidance on how to use them well. UI designers over the years have ref...(原书第2版)》第3-8章中，贯穿了一个能够广泛应用于各种项目的通用设计流程，能够帮助新手设计师按序将所有信息应用于实践。书中还有一些对交互设计领域的开创者和名人的访谈，可以让我们从多个角度对交互设计有一个深刻全面的认识。","good":132,"comments":45},
		],
			[
			{img:"img/books/visua1.jpg",name:'UX设计之道',describe:"《UX设计之道:以用户体验为中心的Web设计》可以看作是用户体验设计的核心参考书。无论是Web设计领域的创业者、项目管理者还是用户体验的策划者和实施者，或是有志于Web设计领域的学生，都应该了解《UX设计之道:以用户体验为中心的Web设计》中的知识。","good":132,"comments":45},
			{img:"img/books/visua2.jpg",name:"妙手回春",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-本书是作者Steve Krug继畅销书《点石成金：访客至上的网页设计秘笈》(Don't Make Me Think)后推出的又一力作。多年来，人们就认识到网站可用性测试可以极大地改善产品质量，但鉴于正规的可用性测试流程复杂、费用高昂，很少人这样做。在本书中，作者详细阐述了一种简化的网站可用性测试方法，让任何人都能够尽早并频繁地对其网站、应用程序和其他产品进行可用性测试，从而将最严重的可用性问题消灭在萌芽状态。","good":132,"comments":45},
			{img:"img/books/visua2.jpg",name:"妙手回春",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-本书是作者Steve Krug继畅销书《点石成金：访客至上的网页设计秘笈》(Don't Make Me Think)后推出的又一力作。多年来，人们就认识到网站可用性测试可以极大地改善产品质量，但鉴于正规的可用性测试流程复杂、费用高昂，很少人这样做。在本书中，作者详细阐述了一种简化的网站可用性测试方法，让任何人都能够尽早并频繁地对其网站、应用程序和其他产品进行可用性测试，从而将最严重的可用性问题消灭在萌芽状态。","good":132,"comments":45},
			{img:"img/books/visua2.jpg",name:"妙手回春",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-本书是作者Steve Krug继畅销书《点石成金：访客至上的网页设计秘笈》(Don't Make Me Think)后推出的又一力作。多年来，人们就认识到网站可用性测试可以极大地改善产品质量，但鉴于正规的可用性测试流程复杂、费用高昂，很少人这样做。在本书中，作者详细阐述了一种简化的网站可用性测试方法，让任何人都能够尽早并频繁地对其网站、应用程序和其他产品进行可用性测试，从而将最严重的可用性问题消灭在萌芽状态。","good":132,"comments":45},
			{img:"img/books/visua2.jpg",name:"妙手回春",describe:"书中包含了作者十多年来对交互设计的一些深刻理解，对如何做好交互设计有很强的实践价值。在《交互设计指南(原书第2版)》第3-本书是作者Steve Krug继畅销书《点石成金：访客至上的网页设计秘笈》(Don't Make Me Think)后推出的又一力作。多年来，人们就认识到网站可用性测试可以极大地改善产品质量，但鉴于正规的可用性测试流程复杂、费用高昂，很少人这样做。在本书中，作者详细阐述了一种简化的网站可用性测试方法，让任何人都能够尽早并频繁地对其网站、应用程序和其他产品进行可用性测试，从而将最严重的可用性问题消灭在萌芽状态。","good":132,"comments":45},
		],
	]
	$scope.information=[
		{title:"阅读排行",content1:"如何自学UX",content2:"UX设计作品展开说",content3:"UI,UE,UX三者区别",content4:"UX就业前景"},
		{title:"我的问题",content1:"UX与UI的区别",content2:"自学UX怎么开始",content3:"如何基于UX进行用户研究",content4:"UI的发展"},
		{title:"我的随笔",content1:"我看了用户体验要用",content2:"UX设计作品展开说",content3:"UI，UX，UE三者的区别",content4:"UX就业前景"},
		{title:"我所关注",content1:"UI的未来",content2:"人人都是产品经理",content3:"ZAKER",content4:"说多了都是泪"}
	];
	$scope.pageNum=3;
	//点击分类
	booksObj.category=function(a){
		if(a=="a"){
			booksObj.categoryImgLeft=98;
			booksObj.categoryOn=booksObj.list[0];
			booksObj.categoryIndex=1;

		};if(a=="b"){
			booksObj.categoryImgLeft=250;
			booksObj.categoryOn=booksObj.list[1];
			booksObj.categoryIndex=2;
		};
		;if(a=="c"){
			booksObj.categoryImgLeft=402;
			booksObj.categoryOn=booksObj.list[2];
			booksObj.categoryIndex=3;
		};;if(a=="d"){
			booksObj.categoryImgLeft=553;
			booksObj.categoryOn=booksObj.list[3];
			booksObj.categoryIndex=4;
		};
		(function(){
					$classificationImg=$(".classificationImg");
					$classificationText=$(".classificationText");
					$classificationText.click(
						function(){
							$classificationImg.css("left",booksObj.categoryImgLeft+"px");
						}
					)
				})();
		};
	booksObj.categoryOn=booksObj.list[0];
	if(booksObj.pageIndex=="books1"){
		booksObj.categoryOn=booksObj.list[0];
		booksObj.categoryIndex=1;
	};if(booksObj.pageIndex=="books2"){
		booksObj.categoryOn=booksObj.list[1];
		booksObj.categoryIndex=2;
	};if(booksObj.pageIndex=="books3"){
		booksObj.categoryOn=booksObj.list[2];
		booksObj.categoryIndex=3;
	};if(booksObj.pageIndex=="books4"){
		booksObj.categoryOn=booksObj.list[3];
		booksObj.categoryIndex=4;
	};
});