package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Employe {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int employe_id;
    private String role;
    private boolean actif;


    public Employe(String role, boolean actif)
    {
        this.role = role;
        this.actif = actif;
    }
}
