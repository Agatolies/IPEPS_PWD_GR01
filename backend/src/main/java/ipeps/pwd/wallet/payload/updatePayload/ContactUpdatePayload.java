package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContactUpdatePayload {
    private UUID contact_id;
    private String firstname;
    private String lastname;
    private String email;
    private String phone;
    private List<Address> addresses;
}
