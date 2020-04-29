package com.project.cmpe172.lostandfound.controller;

import com.project.cmpe172.lostandfound.dto.LoginDto;
import com.project.cmpe172.lostandfound.dto.SignUpDto;
import com.project.cmpe172.lostandfound.service.ApiResponse;
import com.project.cmpe172.lostandfound.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Jiawei Zhang
 * 4/13/2020
 * 10:32 PM
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ApiResponse signUp(@RequestBody SignUpDto signUpDto) {
        ApiResponse apiResponse = userService.signUp(signUpDto);
        return userService.signUp(signUpDto);
    }

    @PostMapping("/login")
    public ApiResponse login(@RequestBody LoginDto loginDto) {
        return userService.login(loginDto);
    }


}
