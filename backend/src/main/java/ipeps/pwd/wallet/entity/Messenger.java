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
    private String last_message;
    private String people;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "Employee_Messenger",
            joinColumns = @JoinColumn(name = "messenger_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id")
    )
    private List<Employee> employee;

    @OneToMany
    @JoinColumn(name = "messenger_id_fk", referencedColumnName = "messenger_id")
    List<Message> messages;

    public Messenger(String last_message, String people, List<Employee> employee, List<Message> messages) {
        this.last_message = last_message;
        this.people = people;
        this.employee = employee;
        this.messages = messages;
    }
}
