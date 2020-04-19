package com.project.cmpe172.lostandfound.exception;

import com.project.cmpe172.lostandfound.enums.ResultEnum;

/**
 * Created by Jiawei Zhang
 * 4/19/2020
 * 12:49 AM
 */
public class LostFoundException extends RuntimeException {

    private Integer code;

    public LostFoundException(ResultEnum resultEnum) {
        super(resultEnum.getMessage());
        this.code = resultEnum.getCode();
    }

    public LostFoundException(Integer code, String message) {
        super(message);
        this.code = code;
    }

}
