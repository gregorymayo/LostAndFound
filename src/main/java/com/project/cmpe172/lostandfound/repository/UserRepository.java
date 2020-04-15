package com.project.cmpe172.lostandfound.repository;

import com.project.cmpe172.lostandfound.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Jiawei Zhang
 * 4/1/2020
 * 5:27 PM
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserEmail(String email);
}
