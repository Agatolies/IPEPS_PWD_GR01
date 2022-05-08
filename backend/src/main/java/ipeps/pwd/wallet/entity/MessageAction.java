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

    public MessageAction(String type, Date actionDate) {
        this.type = type;
        this.actionDate = actionDate;
    }
}
