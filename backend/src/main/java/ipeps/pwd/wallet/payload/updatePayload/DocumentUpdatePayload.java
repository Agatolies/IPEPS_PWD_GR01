package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.entity.Transaction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class DocumentUpdatePayload {
    private UUID document_id;
    private String name;
    private String description;
    private String path;
    private String type;
    private boolean freeAccess;
    private String transaction_id;
    private String employee_id;
    private Organization organization_id;
}
