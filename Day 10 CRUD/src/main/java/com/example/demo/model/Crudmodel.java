package com.example.demo.model;

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
@Table(name="events")
public class Crudmodel {
      @Id
      @Column(name="concertId")
      private int concertid;
      @Column(name="concertlead")
      private String concertlead;
      @Column(name="showtitle")
      private String showtitle;
      @Column(name="genre")
      private String genre;
      @Column(name="type")
      private String type;
      @Column(name="date")
      private LocalDate date;
      @Column(name="timefrom")
      private LocalTime timefrom;
      @Column(name="timeto")
      private LocalTime timeto;
      @Column(name="location")
      private String location;
      
}