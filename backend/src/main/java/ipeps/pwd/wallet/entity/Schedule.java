package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Schedule {
    @Id
    @GeneratedValue(generator="UUID")
    @GenericGenerator(name = "UUID",strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "schedule_id",nullable = false, updatable = false)
    private UUID schedule_id;
    private String type;
    private Date dateSchedule;
    private String comment;


    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "employee_id_fk")
    private Employee employee;

    public Schedule(String type, Date dateSchedule, String comment, Employee employee) {
        this.type = type;
        this.dateSchedule = dateSchedule;
        this.comment = comment;
        this.employee = employee;
    }
}
