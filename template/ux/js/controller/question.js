homePage.controller('question', function($scope){
	var questionObj = $scope.questionObj = {
		
	};
	$scope.pageNum=5;
	questionObj.danger="";
	questionObj.danger1=0;
	questionObj.danger2=0;
	/*判断是否为空*/
	empty=function(a){
		if(a=="" || a==null ||a==undefined){
			return true;
		}
	 };
	/*question假数据*/
	questionObj.publisherDetails={
		name:"生如花",
		signature:"分享经验，交流思想",
		questionNum:159,
		comments:157,
		good:12,
		img:"img/question/headerPor1.jpg",
	}
	questionObj.list=[
		{id:0,img:"img/question/headerPor2.jpg",title:"不知道学习用户体验的方法？",publisher:"明雪",respondents:"生如花",time:"2015-10-29 17:17",describe:"最近看到过用户体验的相关文章，对用体验很有兴趣，希望学习一下如何更了解用户，做出的产品能够更符合用户，得到用户的青睐。但是之前从未接触过用户体验，不知道学习方法，希望各位大神给点意见。","good":132,"comments":45},
		{id:1,img:"img/question/headerPor3.jpg",title:"如何做问卷调查？",publisher:"大雨",respondents:"生如花",time:"2015-10-29 17:17",describe:"如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？如何做问卷调查？","good":132,"comments":45},
		{id:2,img:"img/question/headerPor4.jpg",title:"基于用户体验的交互设计技巧？",publisher:"晴天",respondents:"生如花",time:"2015-10-29 17:17",describe:"基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？基于用户体验的交互设计技巧？","good":132,"comments":45},
		{id:3,img:"img/question/headerPor5.jpg",title:"深度访谈的技巧？",publisher:"多云",respondents:"生如花",time:"2015-10-29 17:17",describe:"深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？深度访谈的技巧？用户体验深度访谈的技巧？","good":132,"comments":45},

	];
	questionObj.question={
		img:questionObj.publisherDetails.img,
		publisher:questionObj.publisherDetails.name,
		comments:questionObj.publisherDetails.comments,
		good:questionObj.publisherDetails.good,
		title:"",
		describe:""
	};
	/*提交问题*/
	questionObj.submit=function(){
		questionObj.question.time=new Date();
		//显示表单错误提示信息
		if(empty(questionObj.question.title)){
			questionObj.danger="问题不能为空";
			questionObj.danger1=1;
		}
		else if(empty(questionObj.question.describe)){
			questionObj.danger="内容不能为空";
			questionObj.danger1=0;
			questionObj.danger2=1;
		}else{
			questionObj.list.unshift(questionObj.question);
			//点击提交按钮关闭弹框
			(function(){
				$questionInput=$(".questionInput");
				$questionInput.css("display","none");
			})();
			questionObj.question={
				img:questionObj.publisherDetails.img,
				publisher:questionObj.publisherDetails.name,
				comments:questionObj.publisherDetails.comments,
				good:questionObj.publisherDetails.good,
				title:"",
				describe:""
			};
		};
	};
	//点击提交问题，问题表单显示
	(function(){
		$questionButton=$(".questionButton");
		$questionInput=$(".questionInput");
		$questionButton.click(
			function(){
				$questionInput.css("display","block");
			}
		)
	})();
	//点击关闭按钮关闭弹框
	(function(){
		$closeButton=$("#closeButton");
		$questionInput=$(".questionInput");
		$closeButton.click(
			function(){
				$questionInput.css("display","none");
			}
		)
	})();
	/*点击点赞，点赞数加一*/
	questionObj.goodClickNum=0;
	questionObj.goodClick=function(id){
		if(questionObj.goodClickNum==0){
			questionObj.list[id].good=questionObj.list[id].good+1;
			questionObj.goodClickNum=1;
		}else{
			questionObj.list[id].good=questionObj.list[id].good-1;
			questionObj.goodClickNum=0;
		}
	}
})