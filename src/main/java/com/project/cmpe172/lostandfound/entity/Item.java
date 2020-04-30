package com.project.cmpe172.lostandfound.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Jiawei Zhang
 * 4/1/2020
 * 5:16 PM
 */
@Entity
@Data
@Table(name = "item_table")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer itemId;

    private String itemName;

    private String itemDescription;

    private String itemPicture;

    private String dateLost;

    private String dateFound;

}
