package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Feedbackmodel;
import com.example.demo.service.Feedbackservice;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/feed")
public class Feedbackcontroller {
	@Autowired
          
	
	    Feedbackservice s;
	   
		
		@PostMapping("/postfeed")
		public Feedbackmodel addInfo(@RequestBody Feedbackmodel st) {
			return s.saveDetails(st);
		}
		
		@GetMapping("/getfeed")
		public List<Feedbackmodel> fetchDetails(){
			return s.getDetails();
		}
		
	}