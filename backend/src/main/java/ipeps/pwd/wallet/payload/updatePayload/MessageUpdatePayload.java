package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.MessageAction;
import ipeps.pwd.wallet.entity.Messenger;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageUpdatePayload {
    private int message_id;
    private boolean isRead;
    private String message;
    private Date date;
    private Messenger messenger;
    private Employee employee;
}
