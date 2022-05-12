package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class MessageAction {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int messageAction_id;
    private String type;
    private Date actionDate;

    @ManyToOne
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "message_id_fk", referencedColumnName = "message_id")
    private Message message;

    public MessageAction(String type, Date actionDate, Message message, Employee employee) {
        this.type = type;
        this.actionDate = actionDate;
        this.message = message;
        this.employee = employee;
    }
}
