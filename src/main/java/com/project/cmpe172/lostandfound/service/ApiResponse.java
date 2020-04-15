package com.project.cmpe172.lostandfound.service;

/**
 * Created by Jiawei Zhang
 * 4/13/2020
 * 10:36 PM
 */
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