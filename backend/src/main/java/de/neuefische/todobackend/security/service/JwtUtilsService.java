package de.neuefische.todobackend.security.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.Duration;
import java.time.Instant;
import java.util.HashMap;

@Service
public class JwtUtilsService {

    @Value("${jwt.secret:}")
    private String jwtSecret;

    public String createToken(HashMap<String, Object> claims, String subject) {
        return Jwts.builder()
                .addClaims(claims) // additional user data
                .setSubject(subject) // username
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(Instant.now().plus(Duration.ofHours(1))))
                .signWith(SignatureAlgorithm.HS256,jwtSecret)
                .compact();
    }

    public Claims parseClaims(String token){
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
    }
}
