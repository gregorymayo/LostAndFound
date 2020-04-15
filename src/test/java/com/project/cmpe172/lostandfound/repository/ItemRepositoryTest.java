package com.project.cmpe172.lostandfound.repository;

import com.project.cmpe172.lostandfound.entity.Item;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by Jiawei Zhang
 * 4/1/2020
 * 5:29 PM
 */
@RunWith(SpringRunner.class)
@SpringBootTest
class ItemRepositoryTest {

    @Autowired
    private ItemRepository repository;

    @Test
    public void saveTest() {
        Item item = new Item();
        item.setItemName("andriod 3");
        item.setItemDescription("an lost andriod");
        item.setItemPicture("http://xxx.jpg");
        repository.save(item);
    }

}