package ipeps.pwd.wallet.payload.createPayload;

import ipeps.pwd.wallet.entity.Organization;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeCreatePayload {
    private String role;
    private boolean actif;
    private Organization organization;
}
