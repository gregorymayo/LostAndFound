package com.project.cmpe172.lostandfound.repository;

import com.project.cmpe172.lostandfound.entity.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by Jiawei Zhang
 * 4/13/2020
 * 11:05 PM
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;


    @Test
    public void findUserByUserEmail() {
        User user = userRepository.findByUserEmail("test@gmail.com");
        System.out.println(user.toString());
        Assert.assertNotNull(user);
    }
}