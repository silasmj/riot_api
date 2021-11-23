package com.example.riot_api.models;


import com.sun.istack.Nullable;
import lombok.Data;

import javax.persistence.*;

@Data
@Table(name="matches")
@Entity
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String startDate;

    @Column
    private String type;

    @Column
    private String role;

    @Column
    private boolean win;

    @Enumerated(value = EnumType.STRING)
    @Column
    private Honor honor;

    @ManyToOne
    @JoinColumn(name = "summoner_id")
    @Nullable
    private Summoner summoner;

    @ManyToOne
    @JoinColumn(name = "champion_id")
    @Nullable
    private Champion champion;


}
