package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Transaction {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "transaction_id", nullable = false, updatable = false)
    private UUID transaction_id;

    private String type;

    private float amount;

    @OneToOne(mappedBy = "transaction")
    private Document document;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "wallet_id_fk", referencedColumnName = "wallet_id")
    private Wallet wallet;

    public Transaction(String type, float amount, Document document, Wallet wallet) {
        this.type = type;
        this.amount = amount;
        this.document = document;
        this.wallet = wallet;
    }
}
