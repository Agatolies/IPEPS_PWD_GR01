package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Document;
import ipeps.pwd.wallet.entity.Wallet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionUpdatePayload {
    private int transaction_id;
    private String type;
    private float amount;
    private Document document;
    private Wallet wallet;
}
