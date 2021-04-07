package info.somrat.rest.seeders;

import info.somrat.rest.enums.ERole;
import info.somrat.rest.models.Role;
import info.somrat.rest.models.Todo;
import info.somrat.rest.models.User;
import info.somrat.rest.repository.RoleRepository;
import info.somrat.rest.repository.TodoRepository;
import info.somrat.rest.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import java.util.Arrays;
import java.util.Date;

@Component
public class DatabaseSeeder {
    private static final Logger logger = LoggerFactory.getLogger(DatabaseSeeder.class);

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    TodoRepository todoRepository;

    @Autowired
    UserRepository userRepository;

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        logger.info("Run Seeder --------------------------");
//        seedUsersTable();
        seedRolesTable();
        seedTodosTable();
        logger.info("End Seeder --------------------------");
    }

    private void seedRolesTable() {
        roleRepository.deleteAll();
        logger.info("Start role seeding ---------- " + roleRepository.count());
        Role admin = new Role(ERole.ROLE_ADMIN);
        Role moderator = new Role(ERole.ROLE_MODERATOR);
        Role user = new Role(ERole.ROLE_USER);
        roleRepository.saveAll(Arrays.asList(admin, moderator, user));
        logger.info("End role seeding ---------- " + roleRepository.count());
    }

    private void seedTodosTable() {
        todoRepository.deleteAll();
        Todo todo1 = new Todo(1L, "nazmul", "Learn React", new Date(), false);
        Todo todo2 = new Todo(2L, "nazmul", "Learn Java", new Date(), true);
        Todo todo3 = new Todo(3L, "nazmul", "Learn FullStack", new Date(), false);
        todoRepository.saveAll(Arrays.asList(todo1, todo2, todo3));
        logger.info("Todos role seeding ---------- " + todoRepository.count());
    }

    private void seedUsersTable() {
        userRepository.deleteAll();
        User user = new User("nazmul", "nazmul@gmail.com", "123456");
        userRepository.save(user);
        logger.info("Users are seeding ---------- " + userRepository.count());
    }
}
