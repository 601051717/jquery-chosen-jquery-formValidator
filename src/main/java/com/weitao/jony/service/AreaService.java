package com.weitao.jony.service;

import java.util.HashMap;
import java.util.List;

public interface AreaService
{
	 List<HashMap<String,String>> loadCity();
	 
	 List<HashMap<String,String>> loadProvince();
	 
	 List<HashMap<String,String>> loadArea();
}
