package com.example.demo.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="feeds")
public class Feedbackmodel {
      @Id
      @Column(name="Id")
      private int feedid;
      @Column(name="Comment")
      private String feedcomment;
      @Column(name="Type")
      private String type;
      @Column(name="Date")
      private String date;
      @Column(name="Rating")
      private String rating;
      
}