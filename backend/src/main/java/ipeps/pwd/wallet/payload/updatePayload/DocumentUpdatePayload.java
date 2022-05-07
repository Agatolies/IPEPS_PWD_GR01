package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Transaction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DocumentUpdatePayload {
    private int document_id;
    private String name;
    private String description;
    private String path;
    private String type;
    private boolean free_access;
    private Transaction transaction;
}
