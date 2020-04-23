package com.project.cmpe172.lostandfound.service;

import lombok.Data;

/**
 * Created by Jiawei Zhang
 * 4/13/2020
 * 10:36 PM
 */
@Data
public class ApiResponse {

    private int status;
    private String message;
    private Object result;

    public ApiResponse(int status, String message, Object result) {
        this.status = status;
        this.message = message;
        this.result = result;
    }

    public int getStatus() {
        return status;
    }
}
