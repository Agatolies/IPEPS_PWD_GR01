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
    private Transaction transaction; //string transaction_id
    private Employee employee;//string employee_id
    private Organization organization;
}
