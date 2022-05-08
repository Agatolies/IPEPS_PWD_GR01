package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int schedule_id;
    private String type;
    private Date dateSchedule;
    private String comment;

    public Schedule(String type, Date dateSchedule, String comment) {
        this.type = type;
        this.dateSchedule = dateSchedule;
        this.comment = comment;
    }
}
