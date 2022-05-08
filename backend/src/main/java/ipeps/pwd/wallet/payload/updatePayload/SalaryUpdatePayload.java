package ipeps.pwd.wallet.payload.updatePayload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SalaryUpdatePayload {
    private int salary_id;
    private String type;
    private Date billingDate;
    private float amount;
    private int periodicity;
}
