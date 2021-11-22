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
    private long id;

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
    @JoinColumn(name = "puuid")
    @Nullable
    private Summoner summoner;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "champion_id", nullable = false)
    private Champion champion;

}
