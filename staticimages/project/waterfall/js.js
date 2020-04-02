$(function(){
	var data=[
		{id:"01","images":"../../main/data/imgs/1.png"},
		{id:"02","images":"../../main/data/imgs/2.png"},
		{id:"02","images":"../../main/data/imgs/2.png"},
		{id:"03","images":"../../main/data/imgs/3.png"},
		{id:"04","images":"../../main/data/imgs/4.png"},
		{id:"05","images":"../../main/data/imgs/5.png"},
		{id:"06","images":"../../main/data/imgs/6.png"},
		{id:"07","images":"../../main/data/imgs/7.png"},
		{id:"08","images":"../../main/data/imgs/8.png"},
		{id:"03","images":"../../main/data/imgs/3.png"},
		{id:"04","images":"../../main/data/imgs/4.png"},
		{id:"05","images":"../../main/data/imgs/5.png"},
		{id:"06","images":"../../main/data/imgs/6.png"},
		{id:"07","images":"../../main/data/imgs/7.png"},
		{id:"08","images":"../../main/data/imgs/8.png"},
		{id:"01","images":"../../main/data/imgs/1.png"},
	];
	$.each(data,function(key,val){
		var str="";
		str='<div class="item"><img class="waterfall-img" src="'+val['images']+'"/>'+
					'<p class="waterfall-title">'+key+'</p></div>';
		var num=Math.floor(key/4);
		var index=(key+num*4)%4
		console.log(key+"-"+num+"-"+index)
		
		$(".waterfall .waterfall-li").eq(index).append(str)
	})
})