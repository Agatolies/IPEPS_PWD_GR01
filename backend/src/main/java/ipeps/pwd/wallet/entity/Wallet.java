package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int wallet_id;
    private String name;
    private String description;
    private boolean actif;
    private String type;

    @OneToMany
    @JoinColumn(name = "wallet_id_fk", referencedColumnName = "wallet_id")
    private List<Transaction> transactions;

    public Wallet(String name, String description, boolean actif, String type, List<Transaction> transactions) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.transactions = transactions;
    }


}
