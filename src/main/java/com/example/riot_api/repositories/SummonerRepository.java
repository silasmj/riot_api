package com.example.riot_api.repositories;

import com.example.riot_api.models.Summoner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SummonerRepository extends JpaRepository<Summoner, Long> {
}
