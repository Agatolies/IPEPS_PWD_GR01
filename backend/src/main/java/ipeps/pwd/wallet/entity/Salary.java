package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Salary {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int salary_id;
    private String type;
    private Date billingDate;
    private float amount;
    private int periodicity;

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
