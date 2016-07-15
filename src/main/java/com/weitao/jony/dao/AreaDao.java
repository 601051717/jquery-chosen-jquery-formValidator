package com.weitao.jony.dao;

import java.util.HashMap;
import java.util.List;

public interface AreaDao
{
	 List<HashMap<String,String>> loadCity();
	 
	 List<HashMap<String,String>> loadProvince();
	 
	 List<HashMap<String,String>> loadArea();
}
