package com.example.riot_api.controllers;

import com.example.riot_api.models.Summoner;
import com.example.riot_api.repositories.SummonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Summoners {

    @Autowired
    SummonerRepository summoner;

    @GetMapping("/summoners")
    public List<Summoner> getSummoners(){
        return summoner.findAll();
    }

    @GetMapping("/summoners/{id}")
    public Summoner getSummonerById(@PathVariable long id){
        return summoner.getById(id);
    }

    @PostMapping("/summoners")
    public Summoner addSummoner(@RequestBody Summoner newSummoner){
        newSummoner.setId(null);
        return summoner.save(newSummoner);
    }

    @DeleteMapping("/summoners/{id}")
    public void deleteSummonerById(@PathVariable Long id) {
        summoner.deleteById(id);
    }

}
