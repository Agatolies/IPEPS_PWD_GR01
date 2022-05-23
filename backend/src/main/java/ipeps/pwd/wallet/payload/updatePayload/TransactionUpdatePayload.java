package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Document;
import ipeps.pwd.wallet.entity.Wallet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionUpdatePayload {
    private UUID transaction_id;
    private String type;
    private float amount;
    private Document document;
    private Wallet wallet;
}
