package com.project.cmpe172.lostandfound.enums;

import lombok.Getter;

/**
 * Created by Jiawei Zhang
 * 4/19/2020
 * 12:50 AM
 */
@Getter
public enum ResultEnum {
    ITEM_NOT_FOUND(1, "Item does not exist"),
    DATE_NOT_FOUND(2, "Item found date not found"),
    USER_NOT_FOUND(3, "User not found"),
    WRONG_PASSWORD(4, "Wrong password");


    private Integer code;

    private String message;

    ResultEnum(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
