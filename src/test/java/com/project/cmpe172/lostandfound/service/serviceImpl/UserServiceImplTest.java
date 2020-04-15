package com.project.cmpe172.lostandfound.service.serviceImpl;

import com.project.cmpe172.lostandfound.entity.User;
import com.project.cmpe172.lostandfound.repository.UserRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by Jiawei Zhang
 * 4/14/2020
 * 11:25 PM
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceImplTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void login() {
        User user = userRepository.findByUserEmail("test@gmail.com");
        System.out.println(user.toString());
        Assert.assertNotNull(user);

    }
}