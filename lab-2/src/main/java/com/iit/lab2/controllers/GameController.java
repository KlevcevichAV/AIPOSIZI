package com.iit.lab2.controllers;

import com.iit.lab2.persist.entity.Game;
import com.iit.lab2.response.RestException;
import com.iit.lab2.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin("*")
public class GameController {
    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/games")
    public List<Game> getGames() {
        return gameService.findAll();
    }

    @GetMapping("/games/{id}")
    public Game getGame(@PathVariable Long id) throws RestException {
        return gameService.findById(id).get();
    }

    @PostMapping("/games/find")
    public Game getGame(@RequestBody Game game) throws RestException {
        return gameService.findByName(game.getName()).get();
    }

    @DeleteMapping("/games/delete/{id}")
    public void deleteGame(@PathVariable Long id) throws RestException {
        gameService.delete(id);
    }

    @GetMapping("/games/update/{id}")
    public Game updateGame(@PathVariable Long id) throws RestException {
        return gameService.findById(id).get();
    }

    @PostMapping("/games/update/{id}")
    public void updateGame(@PathVariable Long id, @RequestBody Game game) throws RestException {
        gameService.update(game);
    }

    @PostMapping("/games/create")
    public void registerNewGame(@RequestBody Game game) throws RestException {
        gameService.create(game);
    }

    @GetMapping("/games/{id}/mainImage")
    public byte[] getMainImage(@PathVariable Long id) throws RestException {
        return gameService.downloadMainImage(id);
    }

    @PostMapping(
            path = "/games/{id}/mainImage/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void uploadMainImage(@PathVariable Long id,
                                @RequestParam("file")MultipartFile file){
        gameService.uploadMainImage(id, file);
    }
}
