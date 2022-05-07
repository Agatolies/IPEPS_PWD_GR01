package ipeps.pwd.wallet.payload.createPayload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressCreatePayload {
    private String type;
    private String road;
    private String number;
    private String box;
    private String cp;
    private String town;
    private String country;
}
