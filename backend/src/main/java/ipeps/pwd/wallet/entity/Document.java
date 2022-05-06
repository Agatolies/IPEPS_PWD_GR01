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
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int Document_id;
    private String name;
    private String description;
    private String path;
    private String type;
    private boolean free_access;


    public Document(String name, String description, String path, String type, boolean free_access)
    {
        this.name = name;
        this.description = description;
        this.path = path;
        this.type = type;
        this.free_access = free_access;
    }
}
