package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.security.entity.Credential;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountUpdatePayload {
    private int account_id;
    private String firstname;
    private String lastname;
    private Credential credential;
    private List<Employee> employees;
}
