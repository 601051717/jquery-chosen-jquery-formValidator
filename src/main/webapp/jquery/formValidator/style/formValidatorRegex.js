var regexEnum =
{
	intege:"^-?[1-9]\\d*$",					//整数
	intege1:"^[1-9]\\d*$",					//正整数
	intege2:"^-[1-9]\\d*$",					//负整数
	num:"^([+-]?)\\d*\\.?\\d+$",			//数字
	num3:"^([+]?)\\d*\\.?\\d+$",			
	num1:"^[1-9]\\d*|0$",					//正数（正整数 + 0）
	num2:"^-[1-9]\\d*|0$",					//负数（负整数 + 0）
	tranAmtnum:"^((([1-9]\\d*)|0)(\\.\\d{1,2})?)$", //金额验证(大于0的金额格式，不能超过两位小数)
	decmal:"^([+-]?)\\d*\\.\\d+$",			//浮点数
	decmal1:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",	//正浮点数
	decmal2:"^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$", //负浮点数
	decmal3:"^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$", //浮点数
	decmal4:"^\\d+(\\.\\d+)?$", //非负浮点数（正浮点数 + 0）"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$"
	decmal5:"^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",//非正浮点数（负浮点数 + 0）
	amount: "^[0-9]+(.[0-9]{1,2})?$",
	email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
	color:"^[a-fA-F0-9]{6}$",				//颜色
	url:"^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",//url
	chinese:"^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",					//仅中文
	ascii:"^[\\x00-\\xFF]+$",				//仅ACSII字符
	zipcode:"^[0-9]\\d{5}(?!\\d)$",						//邮编
	mobile:"^13[\\d]{9}|15[\\d]{9}|17[\\d]{9}|18[\\d]{9}|14[\\d]{9}$",				//手机
	mobile2:"^13[\\d]{9}|15[\\d]{9}|17[\\d]{9}|18[\\d]{9}|14[\\d]{9}$",
	usercode:"^[a-zA-Z]+[0-9_a-zA-Z]*$",	//以英文字母开头,数字、字母或下划线组合
	welcome:"^[a-zA-Z0-9_\\u4E00-\\u9FA5\\uF900-\\uFA2D]{2,20}$",	//2-20个汉字、字母、数字或下划线欢迎语
	ip4:"^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",	//ip地址
	notempty:"^\\S+$",						//非空
	picture:"(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",	//图片
	rar:"(.*)\\.(rar|zip|7zip|tgz)$",								//压缩文件
	file:"(.*)\\.(txt|xls|csv|xlsx)$",	//文件格式
	date:"^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",					//日期
	qq:"^[1-9]*[1-9][0-9]*$",				//QQ号码
	tel:"^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$",	//电话号码的函数(包括验证国内区号,国际区号,分机号)
	username:"^\\w+$",						//用来用户注册。匹配由数字、26个英文字母或者下划线组成的字符串
	transferUsercode: "^[a-zA-z0-9_#@.]{2,20}$",					//转账，校检2-20用户名或11位的手机号码或邮箱
	letter:"^[A-Za-z]+$",					//字母
	letter_u:"^[A-Z]+$",					//大写字母
	letter_l:"^[a-z]+$",					//小写字母
	idcard:"^[1-9]([0-9]{14}|[0-9]{17})$",	//身份证
    bankcardNo:"^[0-9]{8,32}" //银行卡卡号
}

var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}

function isCardID(sId){
	var iSum=0 ;
	var info="" ;
	if(!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
	sId=sId.replace(/x$/i,"a");
	if(aCity[parseInt(sId.substr(0,2))]==null) return "你的身份证地区非法";
	sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2));
	var d=new Date(sBirthday.replace(/-/g,"/")) ;
	if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return "身份证上的出生日期非法";
	for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11) ;
	if(iSum%11!=1) return "你输入的身份证号非法";
	return true;//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女")
}



/**
 * @description 验证身份证
 * @param value 身份证号码字符串
 * @returns true表示正确,false表示错误
 * @demo IDcorrect('320211198602300433') ==> false
 */
function checkCardID(value) {
 //	value=value.trim();
 	var Y,JYM;
    var S,M;
    var idcard_array = new Array();
    idcard_array = value.split("");
 	var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
	if(value!=""&&value.length!=15&&value.length!=18){
		return false;
	}
 	if(value!=""&&area[parseInt(value.substr(0,2))]==null){
 		return false;
 	}
 	switch(value.length){
 	//15位身份证号校验
 	case 15:
 		if ( (parseInt(value.substr(6,2))+1900) % 4 == 0 || ((parseInt(value.substr(6,2))+1900) % 100 == 0 && (parseInt(value.substr(6,2))+1900) % 4 == 0 )){
 			ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;
 		} else {
 			ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;
 		}
 		if(!ereg.test(value)){
 			return false;
 		}
 	break;
 	//18位身份证号校验
 	case 18:
 		if ( parseInt(value.substr(6,4)) % 4 == 0 || (parseInt(value.substr(6,4)) % 100 == 0 && parseInt(value.substr(6,4))%4 == 0 )){
 			//闰年出生日期的合法性正则表达式
 			ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9xX]{1}$/;
 		} else {
 			//平年出生日期的合法性正则表达式
 			ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9xX]{1}$/;
 		}
 		if(ereg.test(value)){//测试出生日期的合法性
 		     //计算校验位
 		     S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
 		     + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
 		     + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
 		     + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
 		     + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
 		     + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
 		     + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
 		     + parseInt(idcard_array[7]) * 1
 		     + parseInt(idcard_array[8]) * 6
 		     + parseInt(idcard_array[9]) * 3 ;
 		     Y = S % 11;
 		     M = "F";
 		     JYM = "10X98765432";
 		     M = JYM.substr(Y,1);/*判断校验位*/
 		    if(M == idcard_array[17].toUpperCase()){
 		       return true; /*检测ID的校验位false;*/
 		    }
 		    else {
 		       return false;
 		    }
 		}
 		else {
 		     return false;
 		}
 	default:
 	     return true;
 	}
};

//短时间，形如 (13:04:06)
function isTime(str)
{
	var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
	if (a == null) {return false}
	if (a[1]>24 || a[3]>60 || a[4]>60)
	{
		return false;
	}
	return true;
}

//短日期，形如 (2003-12-05)
function isDate(str)
{
	var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	if(r==null)return false;
	var d= new Date(r[1], r[3]-1, r[4]);
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
}

//长时间，形如 (2003-12-05 13:04:06)
function isDateTime(str)
{
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
	var r = str.match(reg);
	if(r==null) return false;
	var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]);
	return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
}