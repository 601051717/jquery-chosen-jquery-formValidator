package com.weitao.jony.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weitao.jony.common.StartOnloadService;

@Controller
public class JonyController
{
	
	private static final Logger LOGGER = Logger.getLogger(JonyController.class);
	
	@RequestMapping("/index.do") 
	public String load(HttpServletRequest request)
	{
		request.setAttribute("area", StartOnloadService.AREA_LIST);
		request.setAttribute("city", StartOnloadService.CITY_LIST);
		request.setAttribute("province", StartOnloadService.PROVINCE_LIST);
		return "index";
	}
}
