package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class MessageAction {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "messageAction_id", nullable = false, updatable = false)
    private UUID messageAction_id;
    private String type;
    private Date actionDate;

    // liaison avec les entités employee et message
   @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "employee_id_fk")
    private Employee employee;

   @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "message_id_fk")
    private Message message;

    public MessageAction(String type, Date actionDate, Message message, Employee employee) {
        this.type = type;
        this.actionDate = actionDate;
        this.message = message;
        this.employee = employee;
    }
}
