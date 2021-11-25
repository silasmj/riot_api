package com.example.riot_api.controllers;

import com.example.riot_api.DTO.MatchEditDTO;
import com.example.riot_api.DTO.MatchesDTO;
import com.example.riot_api.models.Match;
import com.example.riot_api.models.Summoner;
import com.example.riot_api.repositories.ChampionRepository;
import com.example.riot_api.repositories.MatchRepository;
import com.example.riot_api.repositories.SummonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Matches {

    @Autowired
    MatchRepository match;

    @Autowired
    SummonerRepository summoner;

    @Autowired
    ChampionRepository champion;

    @GetMapping("/matches")
    public List<Match> getMatches(){
        return match.findAll();
    }

    @GetMapping("/matches/{id}")
    public Match getMatchById(@PathVariable Long id){
        return match.findById(id).get();
    }

    @PostMapping("/matches")
    public Match addMatch(@RequestBody Match newMatch){
        newMatch.setId(null);

        return match.save(newMatch);
    }

    @DeleteMapping("/matches/{id}")
    public void deleteMatchesById(@PathVariable Long id) {
        match.deleteById(id);
    }

    @PatchMapping("/matches/{id}")
    public MatchEditDTO patchGalleryById(@PathVariable Long id, @RequestBody Match matchToUpdate) {
        return match.findById(id).map(foundMatch -> {
            if (matchToUpdate.getStartDate() != null) foundMatch.setStartDate(matchToUpdate.getStartDate());
            if (matchToUpdate.getType() != null) foundMatch.setType(matchToUpdate.getType());
            if (matchToUpdate.getRole() != null) foundMatch.setRole(matchToUpdate.getRole());
            if (matchToUpdate.getWin() != null) foundMatch.setWin(matchToUpdate.getWin());
            if (matchToUpdate.getHonor() != null) foundMatch.setHonor(matchToUpdate.getHonor());
            if (matchToUpdate.getSummoner() != null && matchToUpdate.getSummoner().getGeneratedId() != null) foundMatch.setSummoner(matchToUpdate.getSummoner());
            if (matchToUpdate.getChampion() != null && matchToUpdate.getChampion().getId() != null) foundMatch.setChampion(matchToUpdate.getChampion());
            Match createdMatch = match.save(foundMatch);
            return new MatchEditDTO(createdMatch, matchToUpdate.getSummoner().getGeneratedId(), matchToUpdate.getChampion().getId());
            }).orElse(new MatchEditDTO("Cant save data"));
    }
}
