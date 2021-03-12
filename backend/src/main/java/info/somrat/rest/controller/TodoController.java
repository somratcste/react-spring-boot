package info.somrat.rest.controller;

import info.somrat.rest.models.Todo;
import info.somrat.rest.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @DeleteMapping("/{id}")
    public List<Todo> destroy(@PathVariable Long id) {
        return todoService.destroy(id);
    }
}
