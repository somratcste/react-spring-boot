package info.somrat.rest.controller;

import info.somrat.rest.models.Todo;
import info.somrat.rest.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public Todo show(@PathVariable Long id) {
        return todoService.show(id);
    }

    @PutMapping("/{id}")
    public Todo update(@PathVariable Long id, @RequestBody Todo todo) {
        return todoService.update(id, todo);
    }

    @PostMapping("/")
    public Todo update(@Valid Todo todo) {
        return todoService.save(todo);
    }

    @DeleteMapping("/{id}")
    public List<Todo> destroy(@PathVariable Long id) {
        return todoService.destroy(id);
    }
}
