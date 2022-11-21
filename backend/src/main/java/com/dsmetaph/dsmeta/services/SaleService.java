package com.dsmetaph.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dsmetaph.dsmeta.entities.Sale;
import com.dsmetaph.dsmeta.repositories.SaleRepository;


@Service
public class SaleService {

	@Autowired
	private SaleRepository respository;
	
	public List<Sale> findSales() {
		return respository.findAll(); 	 
		
	}
}
