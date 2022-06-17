package ipeps.pwd.wallet.payload.createPayload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WalletCreatePayload {
    private String name;
    private String description;
    private boolean actif;
    private String type;
    private String employeeId;
    private String organizationId;
}
