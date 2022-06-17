package ipeps.pwd.wallet.entity;

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
public class Organization {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "organization_id", nullable = false, updatable = false)
    private UUID organization_id;
    private String name;
    private String description;
    private boolean actif;

    @JsonIgnore
    @OneToMany
    private List<Address> addresses;

    @JsonIgnore
    @OneToMany(mappedBy = "organization")
    private List<Employee> employees;

    @JsonIgnore
    @OneToMany(mappedBy = "organization")
    private List<Document> documents;

    @JsonIgnore
    @OneToMany(mappedBy = "organization")
    private List<Wallet> wallets;

    public Organization(String name, String description, boolean actif, List<Address> addresses) {
        this.name = name;
        this.description = description;
        this.actif = actif;
        this.addresses = addresses;
    }
}
