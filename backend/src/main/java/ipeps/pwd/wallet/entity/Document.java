package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
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

    @JsonIgnore
    @OneToOne(mappedBy = "document")
    private Transaction transaction;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private Employee employee;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "organization_id_fk", referencedColumnName = "organization_id")
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
