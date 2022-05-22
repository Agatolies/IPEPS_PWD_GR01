package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Message;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageActionUpdatePayload {
    private UUID messageAction_id;
    private String type;
    private Date actionDate;
    private Message message;
    private Employee employee;
}