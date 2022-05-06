package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

// Credential 1,1 --> || 1,1 <-- Account

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Credential{
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int credential_id;
    private String username;
    private String password;
    private String email;
    private boolean actif;

    @JsonIgnore // empèche l'affichage de la propriété
    @OneToOne
    @JoinColumn(name = "account_id_fk", referencedColumnName = "account_id") // renomme le champ de la propriété
    private Account account;

    public Credential(String username, String password, String email, boolean actif)
    {
        this.username = username;
        this.password = password;
        this.email = email;
        this.actif = actif;
    }
}