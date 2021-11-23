package com.example.riot_api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Table(name="summoners")
@Entity
public class Summoner {

    @Id
    @Column
    private Long generatedId;

    @Column
    private String accountId;

    @Column
    private String id;

    @Column
    private String name;

    @Column
    private int profileIconId;

    @Column
    private String puuid = "xxx";

    @Column
    private Long revisionDate;

    @Column
    private Long summonerLevel;

    @JsonIgnore
    @OneToMany(mappedBy = "summoner", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Match> matches;


}
