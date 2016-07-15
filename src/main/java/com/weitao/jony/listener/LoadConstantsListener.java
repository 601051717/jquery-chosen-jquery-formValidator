package com.weitao.jony.listener;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.weitao.jony.service.impl.AreaServiceImpl;

public class LoadConstantsListener implements ServletContextListener
{
	public static List<HashMap<String,String>> AREA_LIST;
	
	public static List<HashMap<String,String>> CITY_LIST;
	
	public static List<HashMap<String,String>> PROVINCE_LIST;

//	@Resource
//	private AreaServiceImpl areaServiceImpl;
	
	public void contextDestroyed(ServletContextEvent arg0)
	{
		
	}

	public void contextInitialized(ServletContextEvent arg0)
	{
//		AREA_LIST = areaServiceImpl.loadArea();
//		CITY_LIST = areaServiceImpl.loadCity();
//		PROVINCE_LIST = areaServiceImpl.loadProvince();
	}

}
