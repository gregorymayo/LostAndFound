package com.project.cmpe172.lostandfound.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Jiawei Zhang
 * 4/1/2020
 * 4:04 PM
 */

@Entity
@Data
@Table(name = "user_table")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String userFullname;

    private String userEmail;

    private String password;

    //set default is false
    @Column(name = "user_isAdmin")
    private boolean userIsAdmin = false;

}
