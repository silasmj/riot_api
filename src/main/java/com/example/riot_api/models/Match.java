package com.example.riot_api.models;


import lombok.Data;

import javax.persistence.*;

@Data
@Table(name="matches")
@Entity
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private String puuid;

    @Column
    private Long startTime;

    @Column
    private Long endTime;

    @Column
    private int queue;

    @Column
    private String type;

    @Column
    private int start;

    @Column
    private int count;

}
