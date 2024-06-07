package com.example.Online.Food.Ordering.System.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @GetMapping("/ping")
    public ResponseEntity<String> ping() {
        return new ResponseEntity<>("Pong", HttpStatus.OK);
    }
}

