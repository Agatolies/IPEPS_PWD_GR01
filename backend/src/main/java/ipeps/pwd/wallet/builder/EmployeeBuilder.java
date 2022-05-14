package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.*;

import java.util.ArrayList;
import java.util.List;

public class EmployeeBuilder {

    private String role = "";
    private boolean actif;
    private Account account;
    private List<Address> addresses = null;

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

    public Employee build() {
        return new Employee(role, actif, account, addresses);
    }
}
