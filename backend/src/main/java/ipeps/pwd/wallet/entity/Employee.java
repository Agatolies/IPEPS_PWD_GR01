package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @OneToMany
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private List<Address> addresses;

    @OneToMany
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private List<Salary> salaries;

    @OneToMany
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private List<Document> documents;

    @OneToMany
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private List<Wallet> wallets;

    @OneToMany
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private List<Schedule> schedules;


    public Employee(String role, boolean actif, List<Address> adresses, List<Salary> salaries,
                    List<Document> documents, List<Wallet> wallets, List<Schedule> schedules) {
        this.role = role;
        this.actif = actif;
        this.addresses = adresses;
        this.salaries = salaries;
        this.documents = documents;
        this.wallets = wallets;
        this.schedules = schedules;
    }
}
