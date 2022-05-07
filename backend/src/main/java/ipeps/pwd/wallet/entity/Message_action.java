package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.dao.DataAccessException;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Message_action {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int message_action_id;
    private String type;
    private Date action_date;

    public Message_action(String type, Date action_date) {
        this.type = type;
        this.action_date = action_date;
    }
}
