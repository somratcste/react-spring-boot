package info.somrat.rest.models;

import lombok.*;
import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    private Long id;

    @Column(nullable = false, length = 89)
    private String username;

    private String description;
    private Date targetDate;

    @Column(columnDefinition = "boolean default false")
    private boolean isDone;
}
