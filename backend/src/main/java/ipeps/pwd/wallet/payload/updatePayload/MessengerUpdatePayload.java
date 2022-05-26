package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Message;
import ipeps.pwd.wallet.entity.Messenger;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessengerUpdatePayload {
    private UUID messenger_id;
    private String lastMessage;
    private String people;
    private List<Employee> employees;
    private List<Message> messages;
}
