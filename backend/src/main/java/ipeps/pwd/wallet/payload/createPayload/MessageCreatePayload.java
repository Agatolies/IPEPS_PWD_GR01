package ipeps.pwd.wallet.payload.createPayload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageCreatePayload {
    private boolean is_read;
    private String message;
    private Date date;
}
