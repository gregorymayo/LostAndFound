package com.project.cmpe172.lostandfound.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Jiawei Zhang
 * 4/1/2020
 * 5:16 PM
 */
@Entity
@Data
@Table(name = "item_table")
@DynamicUpdate
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer itemId;

    private String itemName;

    private String itemDescription;

    private String itemPicture;

    @CreationTimestamp
    private Date dateLost;

    private Date dateFound;

}
