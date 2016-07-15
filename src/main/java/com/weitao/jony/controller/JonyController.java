package com.weitao.jony.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.weitao.jony.listener.LoadConstantsListener;
import com.weitao.jony.service.impl.AreaServiceImpl;

@Controller
public class JonyController
{
	
	private static final Logger LOGGER = Logger.getLogger(JonyController.class);
	
	@Resource
	private AreaServiceImpl areaServiceImpl;
	
	@RequestMapping("/index.do") 
	public String load(HttpServletRequest request)
	{
		request.setAttribute("area", areaServiceImpl.loadArea());
		request.setAttribute("city", areaServiceImpl.loadCity());
		request.setAttribute("province", areaServiceImpl.loadProvince());
		return "index";
	}
}
