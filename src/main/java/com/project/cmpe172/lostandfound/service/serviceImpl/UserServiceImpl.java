package com.project.cmpe172.lostandfound.service.serviceImpl;

import com.project.cmpe172.lostandfound.dto.LoginDto;
import com.project.cmpe172.lostandfound.dto.ReturnLoginDto;
import com.project.cmpe172.lostandfound.dto.SignUpDto;
import com.project.cmpe172.lostandfound.entity.User;
import com.project.cmpe172.lostandfound.repository.CustomUserRepository;
import com.project.cmpe172.lostandfound.repository.UserRepository;
import com.project.cmpe172.lostandfound.service.ApiResponse;
import com.project.cmpe172.lostandfound.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Jiawei Zhang
 * 4/13/2020
 * 10:37 PM
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomUserRepository customUserRepository;

    @Override
    public ApiResponse signUp(SignUpDto signUpDto) {
        String email = signUpDto.getUserEmail();
        if (userRepository.findByUserEmail(email) != null) {
            return new ApiResponse(500, "Email has already been registered", null);
        } else {
            User user = new User();
            BeanUtils.copyProperties(signUpDto, user);
            userRepository.save(user);
            return new ApiResponse(200, "success", user);
        }
    }

    @Override
    public ApiResponse login(LoginDto loginDto) {
        User user = userRepository.findByUserEmail(loginDto.getUserEmail());

        if (user == null) {
            return new ApiResponse(500, "Cannot find user", null);
        }
        if (!user.getPassword().equals(loginDto.getPassword())) {
            return new ApiResponse(500, "Password does not match", null);
        }
        ReturnLoginDto returnLoginDto = new ReturnLoginDto();
        returnLoginDto.setUserEmail(user.getUserEmail());
        returnLoginDto.setUserIsAdmin(user.isUserIsAdmin());
        return new ApiResponse(200, "Login success", returnLoginDto);
    }


    private void validateSignUp(SignUpDto signUpDto) {

    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }
}
