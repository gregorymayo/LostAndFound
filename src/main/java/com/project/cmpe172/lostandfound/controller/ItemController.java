package com.project.cmpe172.lostandfound.controller;

import com.project.cmpe172.lostandfound.entity.Item;
import com.project.cmpe172.lostandfound.enums.ResultEnum;
import com.project.cmpe172.lostandfound.exception.LostFoundException;
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
//@CrossOrigin(origins = "http://localhost:3000")
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
            throw new LostFoundException(ResultEnum.ITEM_NOT_FOUND);
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
            throw new LostFoundException(ResultEnum.ITEM_NOT_FOUND);
        }


        itemService.delete(item);

        return "Deleted item id -" + itemId;
    }

    @PostMapping("/item/{itemId}/{dateFound}")
    public String postFoundDate(@PathVariable int itemId, @PathVariable String dateFound) {
        Item item = itemService.getItem(itemId);

        if (item == null) {
            throw new LostFoundException(ResultEnum.ITEM_NOT_FOUND);
        }

        itemService.postDateFound(itemId, dateFound);

        return "Successfully post found date!";
    }

    @GetMapping("/item/date/{itemId}")
    public String getFoundDate(@PathVariable int itemId) {


        Item item = itemService.getItem(itemId);

        if (item == null) {
            throw new LostFoundException(ResultEnum.ITEM_NOT_FOUND);
        }

        String dateFound = item.getDateFound();
        return dateFound;
    }


}
