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
    private long id;

    @Column
    private String startDate;

    @Column
    private String type;

    @Column
    private String role;

    @Column
    private boolean win;


}
