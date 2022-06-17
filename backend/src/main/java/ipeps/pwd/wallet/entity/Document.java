package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

// Document  0,1 || 0,1  Transaction

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Document {
    @Id
    @GeneratedValue(generator="UUID")
    @GenericGenerator(name="UUID",strategy="org.hibernate.id.UUIDGenerator")
    @Column(name="document_id", nullable=false, updatable = false)
    private UUID document_id;
    private String name;
    private String description;
    private String path;
    private String type;
    private boolean freeAccess;

    @JsonIgnore // empèche l'affichage de la propriété
    @OneToOne
    @JoinColumn(name = "transaction_id_fk")
    private Transaction transaction;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "employee_id_fk")
    private Employee employee;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "organization_id_fk")
    private Organization organization;

    public Document(String name, String description, String path, String type,
                    boolean freeAccess, Transaction transaction, Employee employee, Organization organization) {
        this.name = name;
        this.description = description;
        this.path = path;
        this.type = type;
        this.freeAccess = freeAccess;
        this.transaction = transaction;
        this.employee = employee;
        this.organization = organization;
    }
}
