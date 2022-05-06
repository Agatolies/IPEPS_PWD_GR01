package ipeps.pwd.wallet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Organization {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int organization_id ;
    private String name;
    private String description;
    private boolean actif;


    public Organization(String name, String description, boolean actif)
    {
        this.name = name;
        this.description = description;
        this.actif = actif;
    }

}
