package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int employee_id;
    private String role;
    private boolean actif;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private List<Address> addresses;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "account_id_fk", referencedColumnName = "account_id")
    private Account account;

    public Employee(String role, boolean actif, Account account, List<Address> addresses ) {
        this.role = role;
        this.actif = actif;
        this.account = account;
        this.addresses = addresses;
    }
}
