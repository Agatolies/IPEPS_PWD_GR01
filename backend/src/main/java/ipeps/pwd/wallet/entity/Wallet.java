package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
// JsonIgnore fonctionne lorsqu'il est importe de ce namespace
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Wallet {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "wallet_id", nullable = false, updatable = false)
    private UUID wallet_id;
    private String name;
    private String description;
    private boolean actif;
    private String type;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "organization_id_fk", referencedColumnName = "organization_id")
    private Organization organization;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private Employee employee;

    @OneToMany(mappedBy = "wallet")
    private List<Transaction> transactions;

    public Wallet(String name, String description, boolean actif, String type,
                  Organization organization, Employee employee, List<Transaction> transactions) {
        this.name = name;
        this.description = description;
        this.actif = actif;
        this.type = type;
        this.organization = organization;
        this.employee = employee;
        this.transactions = transactions;

    }
}
