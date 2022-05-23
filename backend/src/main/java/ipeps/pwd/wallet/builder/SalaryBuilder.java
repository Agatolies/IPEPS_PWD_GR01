package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Salary;

import java.util.Date;

public class SalaryBuilder {

    private String type = "";
    private Date billingDate = new Date();
    private float amount;
    private int periodicity;
    private Employee employee;

    public SalaryBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public SalaryBuilder setBillingDate(Date billingDate) {
        this.billingDate = billingDate;
        return this;
    }

    public SalaryBuilder setAmount(float amount) {
        this.amount = amount;
        return this;
    }

    public SalaryBuilder setPeriodicity(int periodicity) {
        this.periodicity = periodicity;
        return this;
    }

    public SalaryBuilder setEmployee(Employee employee){
        this.employee = employee;
        return this;
    }

    public Salary build(){
        return new Salary(type, billingDate, amount, periodicity, employee);
    }
}
