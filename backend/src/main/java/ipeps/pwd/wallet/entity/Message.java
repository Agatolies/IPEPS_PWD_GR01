package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Message {
    @Id
    @GeneratedValue(generator="UUID")
    @GenericGenerator(name="UUID",strategy="org.hibernate.id.UUIDGenerator")
    @Column(name="message_id", nullable=false, updatable = false)
    private UUID message_id;
    private boolean isRead;
    private String message;
    private Date date;

   @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private Employee employee;

   @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "messenger_id_fk", referencedColumnName = "messenger_id")
    private Messenger messenger;

    @JsonIgnore
    @OneToMany(mappedBy = "message")
    private List<MessageAction> messageActions;


    public Message(boolean isRead, String message, Date date, Employee employee, Messenger messenger) {
        this.isRead = isRead;
        this.message = message;
        this.date = date;
        this.employee = employee;
        this.messenger = messenger;
    }
}
