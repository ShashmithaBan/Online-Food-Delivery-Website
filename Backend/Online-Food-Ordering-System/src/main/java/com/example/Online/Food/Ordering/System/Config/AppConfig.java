package com.example.Online.Food.Ordering.System.Config;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

@Configuration
@EnableWebSecurity
public class AppConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{

        http.sessionManagement(management-> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(Authorize -> Authorize
                        //Users with "RESTAURANT_OWNER" , "ADMIN" roles can access api/admin/** endpoints
                        //So can manage the admin stuff easily
                        .requestMatchers("/api/admin/**").hasAnyRole("RESTAURANT_OWNER" , "ADMIN")
                        //this end point for the authenticated users which ones have the JWT tokens any role
                        .requestMatchers("/api/**").authenticated()
                        //this is for the new vistors to the web page . they dont have any JWT token or role
                        .anyRequest().permitAll()
                ).addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class)//this JwtTokenValidator() is not  a inbuilt fuction . we should implemet it to use it for whether the user enter the valid JWT Token
                .csrf(csrf-> csrf.disable())
                .cors(cors->cors.configurationSource(corsConfigurationSource()));

        return http.build();
    }

    private CorsConfigurationSource corsConfigurationSource() {
      return new CorsConfigurationSource() {
          @Override
          public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
              CorsConfiguration cfg = new CorsConfiguration();
              cfg.setAllowedOrigins(Arrays.asList(
                      "https://EkBar.vercel.app",
                      "http://localhost:3000"//update this with the frontend home link {https://localhost/3000}
              ));
              cfg.setAllowedMethods(Collections.singletonList("*"));
              cfg.setAllowCredentials(true);
              cfg.setAllowedHeaders(Collections.singletonList("*"));
              cfg.setExposedHeaders(Arrays.asList("Authorization"));
              cfg.setMaxAge(3600L);
              return cfg;
          }
      };
    }
    @Bean
        PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(); //this one is use to encrypt the password
        }
}
