<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>test</title>
<link rel="stylesheet" href="${pageContext.request.contextPath }/jquery/chosen/chosen.min.css" type="text/css" />
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-1.11.3.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/chosen/chosen.jquery.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/js/area.js"></script>
<script src="${pageContext.request.contextPath }/jquery/formValidator/formValidator-4.0.1.min.js"
	type="text/javascript"></script>
<!--表单验证必须库-->
<script src="${pageContext.request.contextPath }/jquery/formValidator/formValidatorRegex.js"
	type="text/javascript"></script>
<!--表单验证扩展库-->
<link href="${pageContext.request.contextPath }/jquery/formValidator/style/validator.css" rel="stylesheet"
	type="text/css" />
<!--表单验证样式表-->
</head>
<body>
	<form action="" id="jony">
		<table>
			<tr>
				<th align="right">地区：</th>
				<td><select name="province" id="province" style="width: 120px;"
					onchange="checkProvince(this.value,'area','',true);"><option
							value="">--请选择--</select> &nbsp;省&nbsp; <select name="area"
					id="area" style="width: 180px;"><option value="">--请选择--</select>
					&nbsp;市</td>
				<td><div id="areaTip" style="width: 200px"></div></td>
			</tr>
			<script type="text/javascript">
				var provinceS = document.getElementById('province');
				//加载省份下拉框数据
				<c:forEach items="${province}" var="p">
// 					<c:forEach items="${p}" var="p1">
// 						var option = new Option('${p.name}','${p.code}');
// 						provinceS.options.add(option);
// 					</c:forEach>
					var option = new Option('${p.name}','${p.code}');
					provinceS.options.add(option);
				</c:forEach>
				//加载市区数组数据
				var i = 0;
				<c:forEach items="${city}" var="c">
					cityid[i] = new Array("${c.provincecode}", "${c.code}", "${c.name}");
					i++;
				</c:forEach>
			</script>
		</table>
	</form>
	<script type="text/javascript">
		$(document).ready(
				function() {
					$.formValidator.initConfig({
						formID : "jony",
						errorFocus : false,
						debug : false,
						onError : function() {
							return false;
						}
					});
					$("#province").formValidator({ // 验证
						tipID : "areaTip",
						onFocus : "",
						onShow : "请选择您的所在省市！",
						onCorrect : "正确"
					}).functionValidator(
							{
								fun : function(val, elem) {
									return !($("#province").val() == "" || $(
											"#area").val() == "");
								},
								onError : "省市都必选！"
							});
					$("#area").formValidator({ // 验证
						onFocus : "",
						onShow : "请选择您的所在省市！",
						onCorrect : "正确"
					}).functionValidator(
							{
								fun : function(val, elem) {
									return !($("#province").val() == "" || $(
											"#area").val() == "");
								},
								onError : "省市都必选！"
							});

					$("#province").chosen({
						no_results_text : '无此搜索结果',
						search_contains : true
					});
					$("#area").chosen({
						no_results_text : '无此搜索结果',
						search_contains : true
					});
				});
	</script>
</body>
</html>
