function house(){
	this.num=0,
	this.year=0,
	this.yearRate=0,
	this.status=0
	this.outputinfo={
		hkAmount:0,
		totalRate:0,
		totalPrice:0
	}
	this.computeMethod1=function(){
		var month=parseInt(this.year)*12;
		var monthRate=parseFloat(this.yearRate)/12;
		var loansNum=parseFloat(this.num)*10000;
		var hkAmount=(loansNum*monthRate*Math.pow((1+monthRate),month))/(Math.pow((1+monthRate),month)-1)
		var totalRate=month*hkAmount-loansNum;
		var totalPrice=totalRate+loansNum;
		this.outputinfo.hkAmount=hkAmount.toFixed(2);
		this.outputinfo.totalRate=totalRate.toFixed(2);
		this.outputinfo.totalPrice=totalPrice.toFixed(2);
	}
	this.computeMethod2=function(){
		var month=parseInt(this.year)*12;
		var monthRate=parseFloat(this.yearRate)/12;
		var loansNum=parseFloat(this.num)*10000;
		var everymonthyh=loansNum/month;
		var hkAmount=loansNum/month+loansNum*monthRate;
		var totalRate=((everymonthyh+loansNum*monthRate)+loansNum/month*(1+monthRate))/2*month-loansNum;
		var totalPrice=totalRate+loansNum;
		this.outputinfo.hkAmount=hkAmount.toFixed(2);
		this.outputinfo.totalRate=totalRate.toFixed(2);
		this.outputinfo.totalPrice=totalPrice.toFixed(2);
	}
}

var house=new house();

function getInputData(){
	var loansNum=document.getElementById('loansAmount').value;
	var yearLimit=document.getElementById('loansYear').value;
	var loansSelect=document.getElementById('loansRate').value;
	var selectObj=document.getElementById('selectedBox').value;
	var numReg=new RegExp("^([0-9]{1,3}|1000)$");
	var yearReg=new RegExp("^([5-9]|[12][0-9]|30)$");
	if(numReg.test(loansNum)&&yearReg.test(yearLimit)){
		house.num=loansNum;
		house.year=yearLimit;
		house.yearRate=loansSelect;
		house.status=selectObj;
		return true
	}else{
		return false;
	}
}

function showResult(){
	var result=[house.outputinfo.hkAmount,house.outputinfo.totalPrice,house.outputinfo.totalRate];
	var text=['月供','还款总额','总利息'];
	var html='<tr><th>项目</th><th>金额</th></tr>';
	for(var i=0;i<text.length;i++){
		var tableObj=document.getElementById('calResult');
		html+='<tr class="cal-hkResult"><td class="cal-title">'+text[i]+':</td><td class="cal-price">'+result[i]+'</td>';
		tableObj.innerHTML=html;
	}
}

function calResult(){
	if(getInputData()){
		if(house.status==0){
			house.computeMethod1();
		}else if(house.status==1){
			house.computeMethod2();
		}
		showResult();
	}else{
		document.getElementById('calResult').innerHTML='';
	}
}
