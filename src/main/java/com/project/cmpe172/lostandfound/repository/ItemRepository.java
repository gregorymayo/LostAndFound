package com.project.cmpe172.lostandfound.repository;

import com.project.cmpe172.lostandfound.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Jiawei Zhang
 * 4/1/2020
 * 5:26 PM
 */
@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {


}
