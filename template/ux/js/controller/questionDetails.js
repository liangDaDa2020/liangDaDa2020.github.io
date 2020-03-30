homePage.controller('questionDetails', function($scope){
	var questionDetailsObj = $scope.questionDetailsObj = {
		
	};
	questionDetailsObj.index=window.location.search.split('=')[1];
	/*questionDetails假数据*/
	questionDetailsObj.list=[
		{id:0,img:"img/question/headerPor2.jpg",title:"不知道学习用户体验的方法？",publisher:"明雪",respondents:"生如花",time:"2015-10-29 17:17",describe:"最近看到过用户体验的相关文章，对用体验很有兴趣，希望学习一下如何更了解用户，做出的产品能够更符合用户，得到用户的青睐。但是之前从未接触过用户体验，不知道学习方法，希望各位大神给点意见。","good":132,"comments":45},
		{id:1,img:"img/question/headerPor3.jpg",title:"如何做问卷调查？",publisher:"大雨",respondents:"生如花",time:"2015-10-29 17:17",describe:"如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？","good":132,"comments":45},
		{id:2,img:"img/question/headerPor4.jpg",title:"基于用户体验的交互设计技巧？",publisher:"晴天",respondents:"生如花",time:"2015-10-29 17:17",describe:"基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？","good":132,"comments":45},
		{id:3,img:"img/question/headerPor5.jpg",title:"深度访谈的技巧？",publisher:"多云",respondents:"生如花",time:"2015-10-29 17:17",describe:"深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？用户体验深度访谈的技巧？","good":132,"comments":45},

	];
	questionDetailsObj.details=questionDetailsObj.list[questionDetailsObj.index];
	questionDetailsObj.respondent=[
		{img:"img/questionDetails/headerPor2.jpg",publisher:"明雪",time:"2015-10-29 17:17",describe:"考试大纲福建省快递费工行卡撒地方和会计师对方过后"},
		{img:"img/questionDetails/headerPor3.jpg",publisher:"明雪",time:"2015-10-29 17:17",describe:"考试大纲福建省快递费工行卡撒地方和会计师对方过后"},
		{img:"img/questionDetails/headerPor4.jpg",publisher:"明雪",time:"2015-10-29 17:17",describe:"考试大纲福建省快递费工行卡撒地方和会计师对方过后"},
		{img:"img/questionDetails/headerPor5.jpg",publisher:"明雪",time:"2015-10-29 17:17",describe:"考试大纲福建省快递费工行卡撒地方和会计师对方过后"},
		{img:"img/questionDetails/headerPor5.jpg",publisher:"明雪",time:"2015-10-29 17:17",describe:"考试大纲福建省快递费工行卡撒地方和会计师对方过后"},
		
	];
})