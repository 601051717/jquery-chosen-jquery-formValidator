package com.weitao.jony.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

@Controller
public class JonyController
{
private static final Logger LOGGER = Logger.getLogger(JonyController.class);
	
	@RequestMapping("/") // 请求url地址映射，类似Struts的action-mapping
	public @ResponseBody String stOutType(HttpServletRequest request)
	{
		JSONObject jsonObject = new JSONObject();
		return jsonObject.toString();
	}
}
