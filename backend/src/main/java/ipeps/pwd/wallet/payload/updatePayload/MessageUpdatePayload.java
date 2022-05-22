package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.MessageAction;
import ipeps.pwd.wallet.entity.Messenger;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageUpdatePayload {
    private UUID message_id;
    private boolean isRead;
    private String message;
    private Date date;
    private Messenger messenger;
    private Employee employee;
}
