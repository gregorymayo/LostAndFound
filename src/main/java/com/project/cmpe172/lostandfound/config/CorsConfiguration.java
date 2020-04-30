package com.project.cmpe172.lostandfound.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Created by Jiawei Zhang
 * 4/29/2020
 * 8:47 PM
 */
@Configuration
public class CorsConfiguration {
    @Bean
    public WebMvcConfigurer corsConfigurere() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedMethods("GET", "POST", "DELETE").allowedOrigins("http://localhost:3000");
            }
        };
    }
}
