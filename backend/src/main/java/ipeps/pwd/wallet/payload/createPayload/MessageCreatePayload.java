package ipeps.pwd.wallet.payload.createPayload;

import ipeps.pwd.wallet.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageCreatePayload {
    private boolean isRead;
    private String message;
    private Date date;
}
