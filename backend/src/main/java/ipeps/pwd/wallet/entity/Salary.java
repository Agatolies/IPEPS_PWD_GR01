package ipeps.pwd.wallet.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Salary {
    @Id
    @GeneratedValue(generator="UUID")
    @GenericGenerator(name="UUID",strategy="org.hibernate.id.UUIDGenerator")
    @Column(name="salary_id", nullable=false, updatable = false)
    private UUID salary_id;
    private String type;
    private Date billingDate;
    private float amount;
    private int periodicity;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "employee_id_fk", referencedColumnName = "employee_id")
    private Employee employee;

    public Salary(String type, Date billingDate, float amount, int periodicity, Employee employee) {
        this.type = type;
        this.billingDate = billingDate;
        this.amount = amount;
        this.periodicity = periodicity;
        this.employee = employee;
    }
}
