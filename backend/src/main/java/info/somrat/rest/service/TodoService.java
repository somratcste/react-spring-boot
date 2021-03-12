package info.somrat.rest.service;

import info.somrat.rest.models.Todo;
import info.somrat.rest.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    TodoRepository todoRepository;

    public List<Todo> index() {
        return todoRepository.findAll();
    }

    public List<Todo> destroy(Long id) {
        todoRepository.deleteById(id);
        return index();
    }
}
