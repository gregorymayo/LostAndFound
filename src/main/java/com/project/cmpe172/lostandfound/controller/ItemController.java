package com.project.cmpe172.lostandfound.controller;

import com.project.cmpe172.lostandfound.entity.Item;
import com.project.cmpe172.lostandfound.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Jiawei Zhang
 * 4/1/2020
 * 7:27 PM
 */
@RestController
@RequestMapping("/api")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/items")
    public List<Item> getAllItem() {
        return itemService.getAllItems();
    }

    @GetMapping("/item/{itemId}")
    public Item getItem(@PathVariable int itemId) {
        Item item = itemService.getItem(itemId);

        if (item == null) {
            throw new RuntimeException("Item not found");
        }
        return item;
    }

    @PostMapping("/item")
    public Item createItem(@RequestBody Item item) {
        item.setItemId(0);
        itemService.create(item);

        return item;
    }

    @DeleteMapping("/item/{itemId}")
    public String deleteItem(@PathVariable int itemId) {
        Item item = itemService.getItem(itemId);

        if (item == null) {
            throw new RuntimeException("item id not found");
        }


        itemService.delete(item);

        return "Deleted item id -" + itemId;
    }


}
