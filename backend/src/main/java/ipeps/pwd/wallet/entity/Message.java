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

    @OneToMany
    @JoinColumn(name = "message_id_fk", referencedColumnName = "message_id")
    private List<MessageAction> messageActions;

    public Message(boolean isRead, String message, Date date, List<MessageAction> messageActions) {
        this.isRead = isRead;
        this.message = message;
        this.date = date;
        this.messageActions = messageActions;
    }
}
