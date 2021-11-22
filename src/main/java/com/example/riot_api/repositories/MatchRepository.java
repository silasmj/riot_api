package com.example.riot_api.repositories;

import com.example.riot_api.models.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository extends JpaRepository<Match, java.lang.String> {
}
