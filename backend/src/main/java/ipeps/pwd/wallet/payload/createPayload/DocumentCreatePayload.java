package ipeps.pwd.wallet.payload.createPayload;

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
}
