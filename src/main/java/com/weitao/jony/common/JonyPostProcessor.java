package com.weitao.jony.common;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Service;

@Service
public class JonyPostProcessor implements BeanPostProcessor
{

	@Override
	public Object postProcessAfterInitialization(Object arg0, String arg1) throws BeansException
	{
		if (arg0 instanceof StartOnloadService)
		{
			((StartOnloadService) arg0).loadData(); // 调用方法加载数据
		}
		return arg0;

	}

	@Override
	public Object postProcessBeforeInitialization(Object arg0, String arg1) throws BeansException
	{
		return arg0;
	}

}
