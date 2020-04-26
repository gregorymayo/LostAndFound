package com.project.cmpe172.lostandfound.repository.repositoryImpl;

import com.project.cmpe172.lostandfound.repository.CustomUserRepository;
import com.project.cmpe172.lostandfound.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Created by Jiawei Zhang
 * 4/25/2020
 * 8:03 PM
 */
@Repository
public class CustomUserRepositoryImpl implements CustomUserRepository {

    @Autowired
    private UserRepository userRepository;


    @Override
    public boolean emailExist(String email) {
        if (userRepository.findByUserEmail(email) != null) {
            return true;
        }
        return false;
    }
}
