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
    private Account account;
    private Organization organization;
    private List<Address> addresses;
    private List<Salary> salaries;
    private List<Document> documents;
    private List<Wallet> wallets;
    private List<Schedule> schedules;
    private List<MessageAction> messageActions;
    private List<Message> messages;
}