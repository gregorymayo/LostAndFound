package com.project.cmpe172.lostandfound.dto;

import lombok.Data;

/**
 * Created by Jiawei Zhang
 * 4/13/2020
 * 10:32 PM
 */
@Data
public class SignUpDto {

    private String userFullname;

    private String userEmail;

    private String password;

    //set default is false
    private boolean userIsAdmin = false;

}
