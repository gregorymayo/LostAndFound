package com.project.cmpe172.lostandfound.service.serviceImpl;

import com.project.cmpe172.lostandfound.entity.Item;
import com.project.cmpe172.lostandfound.repository.ItemRepository;
import com.project.cmpe172.lostandfound.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by Jiawei Zhang
 * 4/1/2020
 * 7:18 PM
 */

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository repository;

    @Override
    public Item create(Item item) {
        repository.save(item);
        return item;
    }

    @Override
    public Item delete(Item item) {
        repository.delete(item);
        return item;
    }

    @Override
    public Item getItem(Integer itemId) {
        Item result = repository.getOne(itemId);
        return result;
    }

    @Override
    public List<Item> getAllItems() {
        return repository.findAll();
    }


    @Override
    public void postDateFound(Integer itemId, Date date) {
        Item item = repository.findById(itemId).orElse(null);
        if (item == null) {
            throw new RuntimeException("Item not found");
        }

        item.setDateFound(date);
    }

    @Override
    public Date dateFound(Item item) {

        if (item.getDateFound() == null) {
            throw new RuntimeException("Item has not been found yet");
        }

        return item.getDateFound();
    }
}
