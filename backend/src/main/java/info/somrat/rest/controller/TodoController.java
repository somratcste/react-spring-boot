package info.somrat.rest.controller;

import info.somrat.rest.models.Todo;
import info.somrat.rest.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "*")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/")
    public List<Todo> index() {
        return todoService.index();
    }

    @GetMapping("/{id}")
    public Optional<Todo> show(@PathVariable Long id) {
        return todoService.show(id);
    }

    @DeleteMapping("/{id}")
    public List<Todo> destroy(@PathVariable Long id) {
        return todoService.destroy(id);
    }
}
