package ipeps.pwd.wallet.payload.updatePayload;

import ipeps.pwd.wallet.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SalaryUpdatePayload {
    private UUID salary_id;
    private String type;
    private Date billingDate;
    private float amount;
    private int periodicity;
    private Employee employee;
}
