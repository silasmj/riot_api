package com.example.riot_api.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name="summoners")
@Entity
public class Summoner {

    @Column
    private String accountId;

    @Column
    private String id;

    @Column
    private String name;

    @Column
    private int profileIconId;

    @Id
    @Column
    private String puuid = "xxx";

    @Column
    private Long revisionDate;

    @Column
    private Long summonerLevel;

}
