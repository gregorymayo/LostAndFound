package com.project.cmpe172.lostandfound.dto;

import lombok.Data;

/**
 * Created by Jiawei Zhang
 * 4/28/2020
 * 7:00 PM
 */
@Data
public class ReturnLoginDto {
    private String userEmail;
    private boolean userIsAdmin;
}
