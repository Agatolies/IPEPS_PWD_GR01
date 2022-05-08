package ipeps.pwd.wallet.payload.updatePayload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ScheduleUpdatePayload {
    private int schedule_id;
    private String type;
    private Date dateSchedule;
    private String comment;
}
