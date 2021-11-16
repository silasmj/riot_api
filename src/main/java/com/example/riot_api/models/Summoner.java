package com.example.riot_api.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name="summoners")
@Entity
public class Summoner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private String Id;

    @Column
    private String accountId;

    @Column
    private int profileIconId;

    @Column
    private Long revisionDate;

    @Column
    private String name;

    @Column
    private String puuid;

    @Column
    private Long summonerLevel;

}
