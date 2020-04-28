package com.project.cmpe172.lostandfound.controller;

import com.project.cmpe172.lostandfound.dto.SignUpDto;
import com.project.cmpe172.lostandfound.entity.User;
import com.project.cmpe172.lostandfound.service.ApiResponse;
import com.project.cmpe172.lostandfound.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Jiawei Zhang
 * 4/13/2020
 * 10:32 PM
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ApiResponse signUp(@RequestBody SignUpDto signUpDto) {
        ApiResponse apiResponse = userService.signUp(signUpDto);
        return userService.signUp(signUpDto);
    }

    @GetMapping("/login")
    public List<User> login() {
        return userService.getAllUser();
    }


}
