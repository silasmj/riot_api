package com.example.riot_api.controllers;

import com.example.riot_api.models.Match;
import com.example.riot_api.models.Summoner;
import com.example.riot_api.repositories.MatchRepository;
import com.example.riot_api.repositories.SummonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Matches {

    @Autowired
    MatchRepository match;

    @Autowired
    SummonerRepository summoner;

    @GetMapping("/matches")
    public List<Match> getMatches(){
        return match.findAll();
    }

    @GetMapping("/matches/{id}")
    public Match getMatchById(@PathVariable String id){
        return match.findById(id).get();
    }

    @PostMapping("/matches")
    public Match addMatch(@RequestBody Match newMatch){
        return match.save(newMatch);
    }

    @DeleteMapping("/matches/{id}")
    public void deleteMatchesById(@PathVariable String id) {
        match.deleteById(id);
    }

}
