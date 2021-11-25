package com.example.riot_api.DTO;

import com.example.riot_api.models.Champion;
import com.example.riot_api.models.Summoner;

public class MatchesDTO {
    public Summoner summoner;
    public Champion champion;
    public String errorMessage;
    public boolean failed;

    public MatchesDTO(Summoner summoner) {
        this.summoner = summoner;
    }
    public MatchesDTO(Champion champion) {
        this.champion = champion;
    }

    public MatchesDTO(String errorMessage) {
        this.errorMessage = errorMessage;
        this.failed = true;
    }
}
