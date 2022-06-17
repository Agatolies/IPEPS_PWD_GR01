package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
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
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "employee_id", nullable = false, updatable = false)
    private UUID employee_id;
    private String role;
    private boolean actif;

   @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "account_id_fk")
    private Account account;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private List<Address> addresses;

    @JsonIgnore
    @OneToMany(mappedBy = "employee")
    private List<Document> documents;

//    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
    @OneToMany(mappedBy = "employee")
//    @JoinColumn(name="employee_id_fk", referencedColumnName = "employee_id")
    private List<Wallet> wallets;

    @JsonIgnore
    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Salary> salaries;

    @ManyToOne
    @JoinColumn(name = "organization_id_fk")
    private Organization organization;

    @JsonIgnore
    @OneToMany(mappedBy = "employee")
    private List<Schedule> schedule;

    @JsonIgnore
    @OneToMany(mappedBy = "employee")
    private List<MessageAction> messageActions;

    public Employee(String role, boolean actif, Account account, List<Address> addresses,
                    List<Wallet> wallets, List<Salary> salaries, Organization organization) {
        this.role = role;
        this.actif = actif;
        this.account = account;
        this.addresses = addresses;
        this.wallets = wallets;
        this.salaries = salaries;
        this.organization = organization;
    }
}
