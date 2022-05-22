package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Messenger {
    @Id
    @GeneratedValue(generator="UUID")
    @GenericGenerator(name="UUID",strategy="org.hibernate.id.UUIDGenerator")
    @Column(name="messenger_id", nullable=false, updatable = false)
    private UUID messenger_id;
    private String lastMessage;
    private String people;

    //liaison avec l'entité employee
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
