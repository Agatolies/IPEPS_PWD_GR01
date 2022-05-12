package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int message_id;
    private boolean isRead;
    private String message;
    private Date date;

    @ManyToOne
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "messenger_id_fk", referencedColumnName = "messenger_id")
    private Messenger messenger;

    public Message(boolean isRead, String message, Date date, Employee employee, Messenger messenger) {
        this.isRead = isRead;
        this.message = message;
        this.date = date;
        this.employee = employee;
        this.messenger = messenger;
    }
}
