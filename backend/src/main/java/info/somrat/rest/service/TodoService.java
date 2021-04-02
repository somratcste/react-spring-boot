package info.somrat.rest.service;

import info.somrat.rest.models.Todo;
import info.somrat.rest.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    TodoRepository todoRepository;

    public List<Todo> index() {
        return todoRepository.findAll();
    }

    public Todo show(Long id) {
       Todo todo = todoRepository.findOneById(id);
       return todo;
    }

    public List<Todo> destroy(Long id) {
        todoRepository.deleteById(id);
        return index();
    }

    public Todo update(Long id, Todo todo) {
        System.out.print(todo.toString());
        Todo todoFromDb = todoRepository.findOneById(id);
        todoFromDb.setDescription(todo.getDescription());
        todoFromDb.setTargetDate(todo.getTargetDate());
        todoFromDb.setUsername("nazmul");
        return todoRepository.save(todoFromDb);
    }

    public Todo save(Todo todo) {
        todo.setUsername("nazmul");
        return todoRepository.save(todo);
    }
}
