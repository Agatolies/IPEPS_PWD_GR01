package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Account;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.security.entity.Credential;

import java.util.ArrayList;
import java.util.List;

public class AccountBuilder {
    private String firstname = "";
    private String lastname = "";
    private Credential credential = new Credential();
    private List<Employee> employees = new ArrayList<>();

    public AccountBuilder setFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }

    public AccountBuilder setLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }

    public AccountBuilder setCredential(Credential credential) {
        this.credential = credential;
        return this;
    }

    public AccountBuilder setEmployees(List<Employee> employees){
        this.employees = employees;
        return this;
    }

    public Account build() {
        return new Account(firstname, lastname, credential, employees);
    }
}
