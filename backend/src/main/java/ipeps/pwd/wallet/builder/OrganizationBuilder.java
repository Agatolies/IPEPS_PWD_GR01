package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.*;

import java.util.ArrayList;
import java.util.List;

public class    OrganizationBuilder {

    private String name = "";
    private String description = "";
    private boolean actif;
    /*
    private List<Document> documents = new ArrayList<>();
    private List<Wallet> wallets = new ArrayList<>();
    private List<Employee> employees = new ArrayList<>();
    */
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
/*
    public OrganizationBuilder setDocuments(List<Document> documents){
        this.documents = documents;
        return this;
    }

    public OrganizationBuilder setWallets(List<Wallet> wallets){
        this.wallets = wallets;
        return this;
    }

    public OrganizationBuilder setEmployees(List<Employee> employees){
        this.employees = employees;
        return this;
    }
*/
    public OrganizationBuilder setAddresses(List<Address> addresses){
        this.addresses = addresses;
        return this;
    }

    public Organization build() {
        return new Organization(name, description, actif, /*documents, wallets, employees, */addresses);
    }
}
