package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Crudmodel;
@Repository
public interface Crudrepo extends JpaRepository<Crudmodel,Integer> {

}