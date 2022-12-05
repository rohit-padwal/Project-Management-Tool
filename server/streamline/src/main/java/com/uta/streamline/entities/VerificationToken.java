package com.uta.streamline.entities;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.Instant;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.IDENTITY;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Entity
    @Table(name = "token")
    public class VerificationToken {

        @Id
        @GeneratedValue(strategy = IDENTITY)
        private Long id;
        private String token;
        @OneToOne(fetch = LAZY)
        private User user;
        @OneToOne(fetch = LAZY)
        private Admin admin;
        private Instant expiryDate;
    }
