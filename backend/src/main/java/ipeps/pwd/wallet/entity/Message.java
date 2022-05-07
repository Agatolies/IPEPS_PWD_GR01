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
    private boolean is_read;
    private String message;
    private Date date;

    @OneToMany
    @JoinColumn(name = "message_id_fk", referencedColumnName = "message_id")
    private List<MessageAction> message_actions;

    public Message(boolean is_read, String message, Date date, List<MessageAction> message_actions) {
        this.is_read = is_read;
        this.message = message;
        this.message_actions = message_actions;
    }
}
