package ipeps.pwd.wallet.payload.updatePayload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageActionUpdatePayload {
    private int message_action_id;
    private String type;
    private Date action_date;
}
