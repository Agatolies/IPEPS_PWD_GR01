package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Account;
import ipeps.pwd.wallet.entity.Employee;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class AccountBuilder {
    private UUID account_id = null;
    private String firstname = "";
    private String lastname = "";
    private List<Employee> employees = new ArrayList<>();

    public AccountBuilder setId(UUID credential_id) {
        this.account_id = credential_id;
        return this;
    }

    public AccountBuilder setFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }

    public AccountBuilder setLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }

    public AccountBuilder setEmployees(List<Employee> employees){
        this.employees = employees;
        return this;
    }

    public Account build() {
        return new Account(account_id, firstname, lastname, employees);
    }

}
