package ipeps.pwd.wallet.security.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import ipeps.pwd.wallet.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Credential {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long credential_id;
    @Column(unique = true)
    private String username;
    private String password;
    private String email;
    private Boolean actif;

    @JsonIgnore // empèche l'affichage de la propriété
    @OneToOne
    @JoinColumn(name = "account_id_fk", referencedColumnName = "account_id") // renomme le champ de la propriété
    private Account account;

    public Credential(String username, String password, String email, Boolean actif, Account account) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.actif = actif;
        this.account = account;
    }

    public static class Builder {

        private String username;
        private String password;
        private String email;
        private Boolean actif;
        private Account account;

        public Builder setUsername(String username) {
            this.username = username;
            return this;
        }

        public Builder setPassword(String password) {
            this.password = password;
            return this;
        }

        public Builder setEmail(String email) {
            this.email = email;
            return this;
        }

        public Builder setActif(boolean actif) {
            this.actif = actif;
            return this;
        }

        public Builder setAccount(Account account) {
            this.account = account;
            return this;
        }

        public Credential build() {
            return new Credential(username, password, email, actif, account);
        }
    }
}
