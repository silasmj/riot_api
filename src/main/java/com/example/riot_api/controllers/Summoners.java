package com.example.riot_api.controllers;

import com.example.riot_api.models.Summoner;
import com.example.riot_api.repositories.SummonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Summoners {

    @Autowired
    SummonerRepository summonerRepo;

    @GetMapping("/summoners")
    public List<Summoner> getSummoners(){
        return summonerRepo.findAll();
    }
}
