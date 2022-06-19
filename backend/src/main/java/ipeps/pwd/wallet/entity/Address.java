package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.*;
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
public class Address {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "address_id", nullable = false, updatable = false)
    private UUID address_id;
    private String type;
    private String road;
    private String number;
    private String box;
    private String cp;
    private String town;
    private String country;

   @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private Employee employee;

   @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "organization_id_fk", referencedColumnName = "organization_id")
    private Organization organization;

   @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "contact_id_fk", referencedColumnName = "contact_id")
    private Contact contact;

    public Address(String type, String road, String number, String box, String cp,
                   String town, String country, Employee employee, Organization organization, Contact contact) {
        this.type = type;
        this.road = road;
        this.number = number;
        this.box = box;
        this.cp = cp;
        this.town = town;
        this.country = country;
        this.employee = employee;
        this.organization = organization;
        this.contact = contact;
    }
}
