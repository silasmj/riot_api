package com.example.riot_api.repositories;

import com.example.riot_api.models.Champion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChampionRepository extends JpaRepository<Champion, Long> {
}
