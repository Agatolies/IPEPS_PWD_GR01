package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.*;

import java.util.List;

public class EmployeeBuilder {

    private String role = "";
    private boolean actif;
    private Account account;
    private List<Address> addresses;
    private List<Wallet> wallets;
    private List<Salary> salaries;
    private Organization organization;

    public EmployeeBuilder setOrganization(Organization organization){
        this.organization = organization;
        return this;
    }
    public EmployeeBuilder setRole(String role) {
        this.role = role;
        return this;
    }

    public EmployeeBuilder setActif(boolean actif) {
        this.actif = actif;
        return this;
    }

    public EmployeeBuilder setSalaries(List<Salary> salaries) {
        this.salaries = salaries;
        return this;
    }

    public EmployeeBuilder setWallets(List<Wallet> wallets) {
        this.wallets = wallets;
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

    public Employee build() {
        return new Employee(role, actif, account, addresses, wallets, salaries, organization);
    }
}
