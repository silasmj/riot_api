package com.example.riot_api.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Table(name="champions")
@Entity
public class Champion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private String classes;

    @Column
    private String date;

    @Column
    private int blueEssence;

    @Column
    private int RP;

    @JsonIgnore
    @OneToMany(mappedBy = "champion", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Match> matches;
}
