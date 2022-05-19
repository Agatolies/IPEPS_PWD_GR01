package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Contact {
    @Id
    @GeneratedValue(generator="UUID")
    @GenericGenerator(name="UUID",strategy="org.hibernate.id.UUIDGenerator")
    @Column(name="employee_id", nullable=false, updatable = false)
    private int contact_id;
    private String firstname;
    private String lastname;
    private String email;
    private String phone;

    @OneToMany
    @JoinColumn(name = "contact_id_fk", referencedColumnName = "contact_id")
    private List<Address> addresses;

    public Contact(String firstname, String lastname, String email, String phone, List<Address> addresses) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.addresses = addresses;
    }
}
