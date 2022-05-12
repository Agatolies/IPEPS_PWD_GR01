package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Address;
import ipeps.pwd.wallet.entity.Document;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Wallet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrganizationUpdatePayload {
    private int organization_id;
    private String name;
    private String description;
    private boolean actif;
    /*
    private List<Document> documents;
    private List<Wallet> wallets;
    private List<Employee> employees;
    */
    private List<Address> addresses;
}
