package ipeps.pwd.wallet.payload.createPayload;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.entity.Transaction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DocumentCreatePayload {
    private String name;
    private String description;
    private String path;
    private String type;
    private boolean freeAccess;
    private String transaction_id;
    private String employee_id;
    private String organization_id;
}
