var provinceid = new Array();//省的数组
var cityid = new Array();//市区的数组
var sales_area ="";//上一次查询选中的市区
var province ="";//上一次查询选择的省份
var citylist = new Array();

/**
 * 选择省份下拉框的时候调用的JS方法
 * obj 省份ID
 * id 城市ID
 * checkid 市区ID
 * isTure 市区下拉是否显示所有
 */
function checkProvince(obj,id,checkid,isTrue){ 
	var sales_areaS = document.getElementById(id);
	//加载之前先清除原来的option
	for(var i=sales_areaS.options.length;i>=0;i--){
		sales_areaS.options.remove(i);   
	}
	//如果true 那么只增加所有，适用于查询，新增一般不带所有
	if(obj==""){
		if(isTrue){//用于查询
			var option = new Option("所有", "");      
    		sales_areaS.options.add(option);
		}else{//用于修改
			var option = new Option("请选择", "");      
    		sales_areaS.options.add(option);
		}
	}else{
		if(isTrue&&obj!="*"){
			var option = new Option("所有", "");      
    		sales_areaS.options.add(option);
		}else{
			var option = new Option("请选择", "");      
    		sales_areaS.options.add(option);
		}
	}
	if(obj=="*"){
		var option = new Option("默认", "*");      
    	sales_areaS.options.add(option);
	}
	//给select框加 option
	for(var i=0;i<cityid.length;i++){
		if(obj==cityid[i][0]){
			var option = new Option(cityid[i][2], cityid[i][1]);    
			if(checkid.length!=0&&checkid == option.getAttribute('value')){
				option.setAttribute('selected','selected');
			}  
        	sales_areaS.options.add(option); 
		}
	}
	$("#"+id).trigger("chosen:updated"); 
}
