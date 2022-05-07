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
    private Date billing_date;
    private float amount;
    private int periodicity;

    public Salary(String type, Date billing_date, float amount, int periodicity) {
        this.type = type;
        this.billing_date = billing_date;
        this.amount = amount;
        this.periodicity = periodicity;
    }
}
