package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Employee {
    @Id
    @GeneratedValue(generator="UUID")
    @GenericGenerator(name="UUID",strategy="org.hibernate.id.UUIDGenerator")
    @Column(name="employee_id", nullable=false, updatable = false)
    private UUID employee_id;
    private String role;
    private boolean actif;

    @ManyToOne
    @JoinColumn(name = "organization_id_fk", referencedColumnName = "organization_id")
    private Organization organization;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "account_id_fk", referencedColumnName = "account_id")
    private Account account;

    @JsonIgnore
    @OneToMany
    //@JoinColumn(name = "address_id_fk", referencedColumnName = "address_id")
    private List<Address> addresses;

    @JsonIgnore
    @OneToMany
    private List<Salary> salaries;

    @JsonIgnore
    @OneToMany
    private List<Document> documents;

    @JsonIgnore
    @OneToMany
    private List<Wallet> wallets;

    @JsonIgnore
    @OneToMany
    private List<Schedule> schedules;

    @JsonIgnore
    @OneToMany
    private List<MessageAction> messageActions;

    @JsonIgnore
    @OneToMany
    private List<Message> messages;

    public Employee(String role, boolean actif, Account account, Organization organization,
                    List<Address> addresses, List<Salary> salaries,
                    List<Document> documents, List<Wallet> wallets,
                    List<Schedule> schedules, List<MessageAction> messageActions,
                    List<Message> messages) {
        this.role = role;
        this.actif = actif;
        this.account = account;
        this.organization = organization;
        this.addresses = addresses;
        this.salaries = salaries;
        this.documents = documents;
        this.wallets = wallets;
        this.schedules = schedules;
        this.messageActions = messageActions;
        this.messages = messages;
    }
}
