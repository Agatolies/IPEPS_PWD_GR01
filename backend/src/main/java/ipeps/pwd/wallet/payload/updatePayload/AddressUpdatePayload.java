package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Contact;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Organization;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressUpdatePayload {
    private UUID address_id;
    private String type;
    private String road;
    private String number;
    private String box;
    private String cp;
    private String town;
    private String country;
    private Employee employee;
    private Organization organization;
    private Contact contact;
}
