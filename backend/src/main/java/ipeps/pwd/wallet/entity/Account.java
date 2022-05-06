package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

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

    public Account(String firstname, String lastname, Credential credential)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credential = credential;
    }
}