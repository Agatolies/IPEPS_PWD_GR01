package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Organization {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private UUID organization_id ;
    private String name;
    private String description;
    private boolean actif;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "organization_id_fk", referencedColumnName = "organization_id")
    private List<Address> addresses;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name="organization_id_fk", referencedColumnName = "organization_id")
    private List<Employee> employees;

    public Organization(String name, String description, boolean actif, List<Address> addresses) {
        this.name = name;
        this.description = description;
        this.actif = actif;
        this.addresses = addresses;
    }

}
