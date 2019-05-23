package com.pinyougou.sellergoods.service;

import java.util.List;
import java.util.Map;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;
import org.omg.CORBA.PUBLIC_MEMBER;

/**
 * 品牌接口
 * @author Administrator
 *
 */
public interface BrandService {

	public List<TbBrand> findAll();
	//品牌分页
	public PageResult findPage(int pageNum,int pageSize);
	//品牌增加
	public void add(TbBrand brand);
	//根据id查询实体
	public TbBrand findOne(Long id);
	//修改
	public void update(TbBrand brand);
	//删除
	public void delete(Long[] ids);
	//模糊查询
	public PageResult findPage(TbBrand brand,int pageNum,int pageSize);

	List<Map> selectOptionList();
}
