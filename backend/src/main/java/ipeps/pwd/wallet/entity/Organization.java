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
public class Organization {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int organization_id ;
    private String name;
    private String description;
    private boolean actif;

    /*
    @OneToMany
    @JoinColumn(name = "organization_id_fk", referencedColumnName = "organization_id")
    private List<Document> documents;
    @OneToMany
    @JoinColumn(name = "organization_id_fk", referencedColumnName = "organization_id")
    private List<Wallet> wallets;
    @OneToMany
    @JoinColumn(name = "organization_id_fk", referencedColumnName = "organization_id")
    private List<Employee> employees;
    */

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "address_id_fk", referencedColumnName = "address_id")
    private List<Address> addresses;

    /*
    List<Document> documents,
    List<Wallet> wallets,
    List<Employee> employees,
    */
    public Organization(String name, String description, boolean actif, List<Address> addresses) {
        this.name = name;
        this.description = description;
        this.actif = actif;
        /*
        this.documents = documents;
        this.wallets = wallets;
        this.employees = employees;
        */
        this.addresses = addresses;
    }

}
