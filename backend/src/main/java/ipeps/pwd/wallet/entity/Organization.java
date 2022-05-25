package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @GeneratedValue(generator="UUID")
    @GenericGenerator(name="UUID",strategy="org.hibernate.id.UUIDGenerator")
    @Column(name="organization_id", nullable=false, updatable = false)
    private UUID organization_id ;
    private String name;
    private String description;
    private boolean actif;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name = "address_id_fk", referencedColumnName = "address_id")
    private List<Address> addresses;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name="employee_id_fk", referencedColumnName = "employee_id")
    private List<Employee> employees;

    public Organization(String name, String description, boolean actif, List<Address> addresses) {
        this.name = name;
        this.description = description;
        this.actif = actif;
        this.addresses = addresses;
    }

}
