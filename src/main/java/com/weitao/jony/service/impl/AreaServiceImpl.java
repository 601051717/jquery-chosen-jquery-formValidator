package com.weitao.jony.service.impl;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.weitao.jony.dao.AreaDao;
import com.weitao.jony.service.AreaService;

@Service
public class AreaServiceImpl implements AreaService
{
	@Resource
	private AreaDao areaDao;

	@Override
	public List<HashMap<String, String>> loadCity()
	{
		return areaDao.loadCity();
	}

	@Override
	public List<HashMap<String, String>> loadProvince()
	{
		return areaDao.loadProvince();
	}

	@Override
	public List<HashMap<String, String>> loadArea()
	{
		return areaDao.loadArea();
	}

}
