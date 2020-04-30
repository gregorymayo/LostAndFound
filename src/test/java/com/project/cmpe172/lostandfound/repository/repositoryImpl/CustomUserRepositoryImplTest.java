package com.project.cmpe172.lostandfound.repository.repositoryImpl;

import com.project.cmpe172.lostandfound.repository.CustomUserRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by Jiawei Zhang
 * 4/25/2020
 * 8:15 PM
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomUserRepositoryImplTest {

    @Autowired
    private CustomUserRepository repository;

    @Test
    public void emailExist() {
        String email = "woshishsabi@gmail.com";
        boolean test = repository.emailExist(email);
        System.out.println(test);

    }
}