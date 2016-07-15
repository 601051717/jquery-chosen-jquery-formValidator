package com.weitao.jony.common;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.weitao.jony.service.impl.AreaServiceImpl;

@Service
public class StartOnloadService
{
	@Resource
	private AreaServiceImpl areaServiceImpl;

	public static List<HashMap<String, String>> AREA_LIST;

	public static List<HashMap<String, String>> CITY_LIST;

	public static List<HashMap<String, String>> PROVINCE_LIST;

	public void loadData()
	{
		AREA_LIST = areaServiceImpl.loadArea();
		CITY_LIST = areaServiceImpl.loadCity();
		PROVINCE_LIST = areaServiceImpl.loadProvince();
	}

}
