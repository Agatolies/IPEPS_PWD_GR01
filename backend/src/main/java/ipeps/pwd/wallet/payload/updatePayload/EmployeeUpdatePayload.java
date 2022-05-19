package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeUpdatePayload {
    private UUID employee_id;
    private String role;
    private boolean actif;
    private List<Address> addresses;
    private Account account;
    private Organization organization;
}