package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Crudmodel;
import com.example.demo.repo.Crudrepo;

@Service
public class Crudservice {
	    @Autowired
	     Crudrepo r;
	     public Crudmodel saveDetails( Crudmodel e) {
	   	  return r.save(e);
	     }
	     public List<Crudmodel> getDetails(){
	   	  return r.findAll();
	     }
	     public Optional<Crudmodel> getDetails(int concertid){
	      	  return r.findById(concertid);
	        }
	     
	     public Crudmodel updateDetails(Crudmodel e1) {
	   	  return r.saveAndFlush(e1);
	     }
	     public void deleteDetails(int concertid ) {
	   	  r.deleteById(concertid);
	     }
	}