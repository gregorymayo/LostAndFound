package com.project.cmpe172.lostandfound.service;

import com.project.cmpe172.lostandfound.dto.LoginDto;
import com.project.cmpe172.lostandfound.dto.SignUpDto;
import com.project.cmpe172.lostandfound.entity.User;

/**
 * Created by Jiawei Zhang
 * 4/13/2020
 * 10:35 PM
 */
public interface UserService {
    public ApiResponse signUp(SignUpDto signUpDto);

    public ApiResponse login(LoginDto loginDto);

}
