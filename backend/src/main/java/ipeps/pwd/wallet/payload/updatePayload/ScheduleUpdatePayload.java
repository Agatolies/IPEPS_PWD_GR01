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
public class ScheduleUpdatePayload {
    private UUID schedule_id;
    private String type;
    private Date dateSchedule;
    private String comment;
    private Employee employee;
}
