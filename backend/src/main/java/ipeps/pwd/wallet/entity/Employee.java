package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
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
public class Employee {
    @Id
    @GeneratedValue(generator="UUID")
    @GenericGenerator(name="UUID",strategy="org.hibernate.id.UUIDGenerator")
    @Column(name="employee_id", nullable=false, updatable = false)
    private UUID employee_id;
    private String role;
    private boolean actif;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private List<Address> addresses;

    @ManyToOne
    private Organization organization;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "account_id_fk", referencedColumnName = "account_id")
    private Account account;

    public Employee(String role, boolean actif, Account account, List<Address> addresses, Organization organization) {
        this.role = role;
        this.actif = actif;
        this.account = account;
        this.addresses = addresses;
        this.organization = organization;
    }
}
