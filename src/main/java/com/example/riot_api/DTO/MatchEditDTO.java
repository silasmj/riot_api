package com.example.riot_api.DTO;

import com.example.riot_api.models.Champion;
import com.example.riot_api.models.Match;
import com.example.riot_api.models.Summoner;

public class MatchEditDTO {

    public Match match;
    public boolean failed;
    public String errorMessage;
    public Long generatedId;
    public Long id;

    public MatchEditDTO(Match match, Long generatedId, Long id){
        this.match = match;
        this.id = id;
        this.generatedId = generatedId;

    }
    public MatchEditDTO(String errorMessage){
        this.errorMessage = errorMessage;
        this.failed = true;
    }
}
