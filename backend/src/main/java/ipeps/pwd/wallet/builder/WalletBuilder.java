package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.entity.Wallet;

public class WalletBuilder {

    private String name = "";
    private String description = "";
    private boolean actif;
    private String type = "";
    private Organization organization = null;
    private Employee employee = null;

    public WalletBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public WalletBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public WalletBuilder setActif(boolean actif) {
        this.actif = actif;
        return this;
    }

    public WalletBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public WalletBuilder setOrganization(Organization organization) {
        this.organization = organization;
        return this;
    }

    public WalletBuilder setEmployee(Employee employee) {
        this.employee = employee;
        return this;
    }

    public Wallet build(){
        return new Wallet(name, description, actif, type, organization, employee);
    }
}
