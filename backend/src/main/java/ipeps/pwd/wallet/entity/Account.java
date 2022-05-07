package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import ipeps.pwd.wallet.security.entity.Credential;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.List;

// Account 1,1 --> || 1,1 <-- Credential

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Account{
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int account_id;
    private String firstname;
    private String lastname;


    @JsonIgnore // empèche l'affichage de la propriété
    @OneToOne
    @JoinColumn(name = "credential_id_fk", referencedColumnName = "credential_id") // renomme le champ de la propriété
    private Credential credential;

    @OneToMany
    @JoinColumn(name = "account_id_fk", referencedColumnName = "account_id")
    private List<Employee> employees;

    public Account(String firstname, String lastname, Credential credential, List<Employee> employees)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credential = credential;
        this.employees = employees;
    }
}