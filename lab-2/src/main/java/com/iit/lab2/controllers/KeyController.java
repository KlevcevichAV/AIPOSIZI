package com.iit.lab2.controllers;

import com.iit.lab2.persist.entity.Key;
import com.iit.lab2.response.RestException;
import com.iit.lab2.service.KeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class KeyController {

    private final KeyService keyService;

    @Autowired
    public KeyController(KeyService keyService) {
        this.keyService = keyService;
    }

    @GetMapping("/keys")
    public List<Key> getKeys(Model model) {
        return keyService.findAll();
    }

    @GetMapping("/keys/{id}")
    public Key getKey(@PathVariable Long id) throws RestException {
        return keyService.findById(id).get();
    }

    @DeleteMapping("/keys/delete/{id}")
    public void deleteKey(@PathVariable Long id) throws RestException {
        keyService.delete(id);
    }

    @PutMapping("/keys/update/{id}")
    public void update(@PathVariable Long id, @RequestBody Key key) throws RestException {
        key.setId(id);
        keyService.update(key);
    }

    @PostMapping("/keys/create")
    public void createNewKey(@RequestBody Key key) throws RestException {
        keyService.create(key);
    }
}
