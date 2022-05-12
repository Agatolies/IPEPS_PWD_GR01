package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Messenger {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int messenger_id;
    private String lastMessage;
    private String people;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "Employee_Messenger",
            joinColumns = @JoinColumn(name = "messenger_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id")
    )
    private List<Employee> employees;

    public Messenger(String lastMessage, String people, List<Employee> employees) {
        this.lastMessage = lastMessage;
        this.people = people;
        this.employees = employees;
    }
}
