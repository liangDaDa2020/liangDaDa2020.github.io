//时间
//获得时间戳
$("#getDateTemp").click(function(){
	var date=$("input[name='date1']").val();
	date=date.replace("-","/")
	var temp=getDateTemp(date);
	$("#getDateTemp").after("<p>"+temp+"</p>");
})
function getDateTemp(str){
	var temp=Date.parse(str);
	return temp;
}
//获得时间格式方法
$("#getDateType").click(function(){
	var themp=$("input[name='date2']").val();
	var data=getDateType(themp,"Y-m-d");
	$("#getDateType").after("<p>"+data+"</p>");
})
function getDateType(themp,type){//时间戳
	var d=new Date(parseInt(themp));
	var yeart=d.getFullYear();
	var month=d.getMonth()+1; 
	var day=d.getDate(); 
	var h=d.getHours();
	var i=d.getMinutes();
	var s=d.getSeconds();
	if(month<10){ month = "0"+month; } 
	if(day<10){ day = "0"+day; }
	if(type=="Y-m-d"){
		return yeart+'-'+month+'-'+day+" "+h+":"+i+":"+s;
	}
}