package info.somrat.rest.repository;

import info.somrat.rest.models.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    Todo findOneById(Long id);
}
