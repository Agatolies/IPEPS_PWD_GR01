package ipeps.pwd.wallet.payload.createPayload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContactCreatePayload {
    private String firstname;
    private String lastname;
    private String email;
    private String phone;
}
