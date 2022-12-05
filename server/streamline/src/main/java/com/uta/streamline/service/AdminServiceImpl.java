package com.uta.streamline.service;

import com.uta.streamline.entities.Admin;
import com.uta.streamline.repository.AdminRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements UserDetailsService {

    private final AdminRepository adminRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String adminName) throws UsernameNotFoundException {
        Optional<Admin> userOptional = adminRepository.findByAdminName(adminName);
        Admin admin = userOptional
                .orElseThrow(() -> new UsernameNotFoundException("No admin " +
                        "Found with admin name : " + adminName));
        return new org.springframework.security
                .core.userdetails.User(admin.getAdminName(), admin.getPassword(),
                admin.isEnabled(), true, true,
                true, getAuthorities("ADMIN"));
    }

    private Collection<? extends GrantedAuthority> getAuthorities(String role) {
        return Collections.singletonList(new SimpleGrantedAuthority(role));
    }
}
