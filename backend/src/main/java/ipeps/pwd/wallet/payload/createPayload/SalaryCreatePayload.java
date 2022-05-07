package ipeps.pwd.wallet.payload.createPayload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SalaryCreatePayload {
    private String type;
    private Date billing_date;
    private float amount;
    private int periodicity;
}
