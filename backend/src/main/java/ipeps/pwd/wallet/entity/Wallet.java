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
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int wallet_id;
    private String name;
    private String description;
    private boolean actif;
    private String type;

    @ManyToOne
    @JoinColumn(name = "organization_id_fk", referencedColumnName = "organization_id")
    private Organization organization;

    @ManyToOne
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private Employee employee;

    public Wallet(String name, String description, boolean actif, String type,
                  Organization organization, Employee employee) {
        this.name = name;
        this.description = description;
        this.actif = actif;
        this.type = type;
        this.organization = organization;
        this.employee = employee;

    }


}
