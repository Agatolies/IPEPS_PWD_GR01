package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeUpdatePayload {
    private int employee_id;
    private String role;
    private boolean actif;
    private List<Address> addresses;
    private List<Salary> salaries;
    private List<Document> documents;
    private List<Wallet> wallets;
    private List<Schedule> schedules;
}
