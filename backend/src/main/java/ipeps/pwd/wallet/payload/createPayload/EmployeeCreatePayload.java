package ipeps.pwd.wallet.payload.createPayload;

import ipeps.pwd.wallet.entity.Account;
import ipeps.pwd.wallet.entity.Address;
import ipeps.pwd.wallet.entity.Organization;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeCreatePayload {
    private String role;
    private boolean actif;
    private List<Address> addresses;
    private Organization organization;
    private Account account;
}
