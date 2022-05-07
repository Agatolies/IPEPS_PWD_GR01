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
    private int message_action_id;
    private String type;
    private Date action_date;

    public MessageAction(String type, Date action_date) {
        this.type = type;
        this.action_date = action_date;
    }
}
