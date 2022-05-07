package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int address_id;
    private String type;
    private String road;
    private String number;
    private String box;
    private String cp;
    private String town;
    private String country;

    public Address(
            String type, String road, String number, String box, String cp,
            String town, String country)
    {
        this.type = type;
        this.road = road;
        this.number = number;
        this.box = box;
        this.cp = cp;
        this.town =town;
        this.country = country;
    }
}
