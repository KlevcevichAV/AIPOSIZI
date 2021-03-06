package com.iit.lab2.controllers;

import com.iit.lab2.persist.entity.Game;
import com.iit.lab2.repr.GameRepr;
import com.iit.lab2.service.GameService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Controller
public class GameController {
    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping("/games")
    public String getGames(Model model) {
        List<Game> gameList = gameService.findAll();
        model.addAttribute("games", gameList);
        return "games";
    }

    @GetMapping("/games/delete/{id}")
    public String deleteGame(@PathVariable Long id) {
        gameService.delete(id);
        return "redirect:/games";
    }

    @GetMapping("/games/update/{id}")
    public String updateGame(@PathVariable Long id, Model model) {
        Optional<Game> game = gameService.findById(id);
        if (game.isPresent()) {
            model.addAttribute("game", new GameRepr(game.get()));
            return "updateGame";
        } else {
            return "games";
        }
    }

    @PostMapping("/games/update/{id}")
    public String updateGame(@PathVariable Long id, @ModelAttribute("game") @Valid GameRepr game,
                             BindingResult result) {
        if (result.hasErrors()) {
            return "updateGame";
        }
        Game oldGame = gameService.findById(id).get();
        if (!oldGame.getName().equals(game.getName())) {
            if (gameService.findByName(game.getName()).isPresent()) {
                result.rejectValue("name", "", "Name is exist");
                return "updateGame";
            }
        }
        oldGame.setDate(game.getTargetDate());
        oldGame.setDescription(game.getDescription());
        oldGame.setPrice(game.getPrice());
        oldGame.setName(game.getName());
        gameService.update(oldGame);
        return "redirect:/games";
    }

    @GetMapping("/games/create")
    public String registerPage(Model model) {
        model.addAttribute("game", new GameRepr());
        return "createGame";
    }

    @PostMapping("/games/create")
    public String registerNewGame(@ModelAttribute("game") @Valid GameRepr game,
                                  BindingResult result) {
        if (result.hasErrors()) {
            return "createGame";
        }
        if (gameService.findByName(game.getName()).isPresent()) {
            result.rejectValue("name", "", "Name is exist");
            return "createGame";
        }
        gameService.create(game);
        return "redirect:/games";
    }
}
