package com.project.cmpe172.lostandfound.service;

import com.project.cmpe172.lostandfound.entity.Item;

import java.util.Date;
import java.util.List;

/**
 * Created by Jiawei Zhang
 * 4/1/2020
 * 7:17 PM
 */
public interface ItemService {

    Item create(Item item);

    Item delete(Item item);

    Item getItem(Integer itemId);

    List<Item> getAllItems();

    //post the date found of an item
    void postDateFound(Integer itemId, Date date);

    //return found date for an item
    Date dateFound(Item item);

}
