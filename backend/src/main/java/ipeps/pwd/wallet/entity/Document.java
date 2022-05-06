package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;

// Document  0,1 || 0,1  Transaction

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int Document_id;
    private String name;
    private String description;
    private String path;
    private String type;
    private boolean free_access;

    @JsonIgnore // empèche l'affichage de la propriété
    @OneToOne
    @JoinColumn(name = "transaction_id_fk", referencedColumnName = "transaction_id") // renomme le champ de la propriété
    private Transaction transaction;

    public Document(String name, String description, String path, String type, boolean free_access, Transaction transaction)
    {
        this.name = name;
        this.description = description;
        this.path = path;
        this.type = type;
        this.free_access = free_access;
        this.transaction = transaction;
    }
}
