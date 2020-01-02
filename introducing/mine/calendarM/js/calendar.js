var dayBoxHtml="";


//今天星期几
function getDay(y0,m0,d0=1){//2019,2,11
	var str="";
	//现在
	var dayN=new Date();
	var dNPase=Date.parse(dayN);
	//选中
	if(m0<10)m0="0"+m0;
	if(d0<10)d0="0"+d0;
	var dayStr=y0+"-"+m0+"-"+d0;
	var day=new Date(dayStr);
	var m=day.getMonth()+1; 
	var y=day.getFullYear();
	var d=day.getDate(); 
	var dPase=Date.parse(day);
	//当月第一天
	var monthOne=day;
	monthOne.setDate(1);
	var monthOnew=monthOne.getDay();
	var monthOnewPase
	//当月最后一天
	var dayLast=monthOne;
	dayLast.setMonth(m);
	var dayLastPase=Date.parse(dayLast)-86400000;
	var dayLastW=dayLast.getDay();
	
	$("#dateBox .title").html(dayStr);
	$("#dateBox .title").attr("data",dayStr);
	//空
	for(var i=0;i<monthOnew;i++){
		str+='<li class="day"></li>';
	}
	//过去
	for(var i=1;i<parseInt(d);i++){
		
		var dateStr;
		if(i<10){ 
			dateStr =parseInt(y+''+m+"0"+i);
		}else{
			dateStr =parseInt(y+''+m+''+i);
		}
		str+='<li class="day pastDay" date='+dateStr+'><div><p class="day">'+i+'</p></div></li>';
	}
	//现在,未来
	for(var i=dPase;i<=dayLastPase;){
		var day=new Date(i);
		var m=day.getMonth()+1; 
		var y=day.getFullYear();
		var d=day.getDate(); 
		var dateStr=0;
		if(d<10){ 
			dateStr =parseInt(y+''+m+"0"+d);
		}else{
			dateStr =parseInt(y+''+m+''+d);
		}
		if(i<dNPase){
			str+='<li class="day pastDay" date='+dateStr+'><div><p class="day">'+d+'</p></div></li>';
		}else{
			str+='<li class="day" date='+dateStr+'><div><p class="day">'+d+'</p></div></li>';
		}
		i+=86400000;
	}
	//空
	for(var i=dayLastW;i<7;i++){
		str+='<li class="day"></li>';
	}
	
	
	
	
	
	$("#dayBox").html(str);
}
//初始化
function init(){
	var day=new Date();
	var m=day.getMonth()+1; 
	var y=day.getFullYear();
	var d=day.getDate(); 
	getDay(y,m,d);//2019,2,11
}
init();
//上,下一个月
$("#dateBox .monButton").click(function(){
	var add=parseInt($(this).attr("add"));
	var data=$("#dateBox .title").attr("data");
	var day=new Date(data);
	var m=day.getMonth()+1; 
	if(add>0){//上一个月
		var dayNext=day;
		dayNext.setMonth(m);
		m=dayNext.getMonth()+1; 
		var y=dayNext.getFullYear();
		getDay(y,m);
	}else{//下一个月
		var dayLast=day;
		dayLast.setMonth(m-2);
		m=dayLast.getMonth()+1; 
		var y=dayLast.getFullYear();
		getDay(y,m);
	}
})



















