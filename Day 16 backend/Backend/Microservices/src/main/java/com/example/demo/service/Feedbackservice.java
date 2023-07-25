package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Feedbackmodel;
import com.example.demo.repository.Feedbackrepo;

@Service
public class Feedbackservice {
	    @Autowired
	     Feedbackrepo r;
	     public Feedbackmodel saveDetails( Feedbackmodel e) {
	   	  return r.save(e);
	     }
	     public List<Feedbackmodel> getDetails(){
	   	  return r.findAll();
	     }
	     
	}