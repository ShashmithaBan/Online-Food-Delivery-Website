package com.example.Online.Food.Ordering.System.Repo;

import com.example.Online.Food.Ordering.System.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

    public User findByEmail(String username);
}
