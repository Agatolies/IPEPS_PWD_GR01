package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.*;

import java.util.ArrayList;
import java.util.List;

public class    OrganizationBuilder {

    private String name = "";
    private String description = "";
    private boolean actif;
    private List<Address> addresses = new ArrayList<>();

    public OrganizationBuilder setName(String name){
        this.name = name;
        return this;
    }

    public OrganizationBuilder setDescription(String description){
        this.description = description;
        return this;
    }

    public OrganizationBuilder setActif(boolean actif){
        this.actif = actif;
        return this;
    }

    public OrganizationBuilder setAddresses(List<Address> addresses){
        this.addresses = addresses;
        return this;
    }

    public Organization build() {
        return new Organization(name, description, actif, addresses);
    }
}
