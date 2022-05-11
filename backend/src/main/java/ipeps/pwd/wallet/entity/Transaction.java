package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.List;

// Transaction  0,1 || 0,1  Document

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int transaction_id;
    private String type;
    private float amount;

    @ManyToOne
    @JoinColumn(name = "wallet_id_fk", referencedColumnName = "wallet_id")
    private Wallet wallet;


    @JsonIgnore // empèche l'affichage de la propriété
    @OneToOne
    @JoinColumn(name = "document_id_fk", referencedColumnName = "document_id") // renomme le champ de la propriété
    private Document document;

    public Transaction(String type, float amount, Document document, Wallet wallet) {
        this.type = type;
        this.amount = amount;
        this.document = document;
        this.wallet = wallet;
    }
}
