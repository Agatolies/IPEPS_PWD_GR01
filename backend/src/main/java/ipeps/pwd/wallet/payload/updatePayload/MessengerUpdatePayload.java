package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Message;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessengerUpdatePayload {
    private int messenger_id;
    private String last_message;
    private String people;
    private List<Employee> employees;
    private List<Message> messages;
}
