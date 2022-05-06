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
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int Wallet_id;
    private String name;
    private String description;
    private String type;
    private boolean actif;


    public Wallet(String name, String description, String type, boolean actif)
    {
        this.name = name;
        this.description = description;
        this.type = type;
        this.actif = actif;
    }
}
