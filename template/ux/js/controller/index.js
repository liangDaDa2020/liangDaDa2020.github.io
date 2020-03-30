homePage.controller('home', function($scope){
	var homeObj = $scope.homeObj = {
		
	};

	/*home假数据*/
	homeObj.news=[
		{img:"img/home/newImg1.jpg",title:"全球顶级用户体验(UX)设计专家Abigail加盟华为消费者BG",reference:"凤凰网黑龙江频道",time:"2015-10-29 17:17",describe:"华为消费者BGCEO余承东表示,Abigail在用户体验设计领域经验丰富,我期待由她率领的团队能让华为用户体验设上岛咖啡精神可嘉读后感上岛咖啡所军奥多过扩绿军多多多多多多多多多多多多多多多多多多多多多","good":132,"comments":45},
		{img:"img/home/newImg2.jpg",title:"高德与百度口水战：用户体验才是最关键",reference:"凤海疆在线",time:"2016-10-20 09:14",describe:"除此之外,易观互联网出行分析师王晨曦在接受《中国产经新闻》记者采访时谈到,高德地图和百度地图在2015年的时候就已经产生了很大的不... 用户体验最重要 互联网地图领域,头把交椅之争历时已久。但无论怎...app。如同","good":132,"comments":45},
		{img:"img/home/newImg3.jpg",title:"谈一谈SEO优化中怎样做好用户体验？",reference:"今日头条",time:"今天10:53",describe:"提高网站用户体验是他们的重要任务之一。因为做SEO优化的人都知道,用户体验是提高网站排名的关键。 众所gas快递费价格卡卡卡饰打开过发所多绿多多多多多多多多多多多多多多多多的点点滴滴多多多多多多多多多多多多多多多多多多多多的点点滴滴多多多多多多","good":132,"comments":45},
		{img:"img/home/newImg3.jpg",title:"谈一谈SEO优化中怎样做好用户体验？",reference:"今日头条",time:"今天10:53",describe:"提高网站用户体验是他们的重要任务之一。因为做SEO优化的人都知道,用户体验是提高网站排名的关键。 众所","good":132,"comments":45},
		{img:"img/home/newImg3.jpg",title:"谈一谈SEO优化中怎样做好用户体验？",reference:"今日头条",time:"今天10:53",describe:"提高网站用户体验是他们的重要任务之一。因为做SEO优化的人都知道,用户体验是提高网站排名的关键。 众所","good":132,"comments":45},
		{img:"img/home/newImg3.jpg",title:"谈一谈SEO优化中怎样做好用户体验？",reference:"今日头条",time:"今天10:53",describe:"提高网站用户体验是他们的重要任务之一。因为做SEO优化的人都知道,用户体验是提高网站排名的关键。 众所","good":132,"comments":45}
	];
	$scope.information=[
		{title:"阅读排行",content1:"如何自学UX",content2:"UX设计作品展开说",content3:"UI,UE,UX三者区别",content4:"UX就业前景"},
		{title:"我的问题",content1:"UX与UI的区别",content2:"自学UX怎么开始",content3:"如何基于UX进行用户研究",content4:"UI的发展"},
		{title:"我的随笔",content1:"我看了用户体验要用",content2:"UX设计作品展开说",content3:"UI，UX，UE三者的区别",content4:"UX就业前景"},
		{title:"我所关注",content1:"UI的未来",content2:"人人都是产品经理",content3:"ZAKER",content4:"说多了都是泪"}
	];
	$scope.pageNum=1;
});