package com.project.cmpe172.lostandfound.service.serviceImpl;

import com.project.cmpe172.lostandfound.dto.LoginDto;
import com.project.cmpe172.lostandfound.dto.SignUpDto;
import com.project.cmpe172.lostandfound.entity.User;
import com.project.cmpe172.lostandfound.enums.ResultEnum;
import com.project.cmpe172.lostandfound.exception.LostFoundException;
import com.project.cmpe172.lostandfound.repository.UserRepository;
import com.project.cmpe172.lostandfound.service.ApiResponse;
import com.project.cmpe172.lostandfound.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Jiawei Zhang
 * 4/13/2020
 * 10:37 PM
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;


    @Override
    public ApiResponse signUp(SignUpDto signUpDto) {
        validateSignUp(signUpDto);
        User user = new User();
        BeanUtils.copyProperties(signUpDto, user);
        userRepository.save(user);
        return new ApiResponse(200, "success", user);
    }

    @Override
    public ApiResponse login(LoginDto loginDto) {
        User user = userRepository.findByUserEmail(loginDto.getUserEmail());
        if (user == null) {
            throw new LostFoundException(ResultEnum.USER_NOT_FOUND);
        }
        if (!user.getPassword().equals(loginDto.getPassword())) {
            throw new LostFoundException(ResultEnum.WRONG_PASSWORD);
        }
        return new ApiResponse(200, "Login success", null);
    }


    private void validateSignUp(SignUpDto signUpDto) {

    }
}
