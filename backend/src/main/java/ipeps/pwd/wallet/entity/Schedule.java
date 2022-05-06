package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
    private Date date_schedule;
    private String comment;


    public Schedule(String type, Date date_schedule, String comment)
    {
        this.type = type;
        this.date_schedule = date_schedule;
        this.comment = comment;
    }
}
