package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

// Account 1,1 --> || 1,1 <-- Credential

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Account {
    @Id
    @Column(name = "account_id", nullable = false, updatable = false)
    private UUID account_id;
    private String firstname;
    private String lastname;

    @OneToMany(mappedBy = "account")
    private List<Employee> employees;

    public Account(String firstname, String lastname, List<Employee> employees) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.employees = employees;
    }
}