package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.*;

import java.util.ArrayList;
import java.util.List;

public class EmployeeBuilder {

    private String role = "";
    private boolean actif;
    private Account account;
    private List<Address> addresses = null;
    /*
    private List<Salary> salaries = null;
    private List<Document> documents = null;
    private List<Wallet> wallets = null;
    private List<Schedule> schedules = null;
    */

    public EmployeeBuilder setRole(String role) {
        this.role = role;
        return this;
    }

    public EmployeeBuilder setActif(boolean actif) {
        this.actif = actif;
        return this;
    }

    public EmployeeBuilder setAccount(Account account){
        this.account = account;
        return this;
    }

    public EmployeeBuilder setAddresses(List<Address> addresses) {
        this.addresses = addresses;
        return this;
    }
/*
    public EmployeeBuilder setSalaries(List<Salary> salaries) {
        this.salaries = salaries;
        return this;
    }

    public EmployeeBuilder setDocuments(List<Document> documents) {
        this.documents = documents;
        return this;
    }

    public EmployeeBuilder setWallets(List<Wallet> wallets) {
        this.wallets = wallets;
        return this;
    }

    public EmployeeBuilder setSchedules(List<Schedule> schedules) {
        this.schedules = schedules;
        return this;
    }
*/
    public Employee build() {
        return new Employee(role, actif, account, addresses/*, salaries, documents, wallets, schedules*/);
    }
}
