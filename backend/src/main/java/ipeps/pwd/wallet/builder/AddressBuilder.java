package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Address;
import ipeps.pwd.wallet.entity.Contact;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Organization;

public class AddressBuilder {
    private String type = "";
    private String road = "";
    private String number = "";
    private String box = "";
    private String cp = "";
    private String town = "";
    private String country = "";
    private Employee employee = null;
    private Organization organization = null;
    private Contact contact = null;

    public AddressBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public AddressBuilder setRoad(String road) {
        this.road = road;
        return this;
    }

    public AddressBuilder setNumber(String number) {
        this.number = number;
        return this;
    }

    public AddressBuilder setBox(String box) {
        this.box = box;
        return this;
    }

    public AddressBuilder setCp(String cp) {
        this.cp = cp;
        return this;
    }

    public AddressBuilder setTown(String town) {
        this.town = town;
        return this;
    }

    public AddressBuilder setCountry(String country) {
        this.country = country;
        return this;
    }

    public AddressBuilder setEmployee(Employee employee){
        this.employee = employee;
        return this;
    }

    public AddressBuilder setOrganization(Organization organization){
        this.organization = organization;
        return this;
    }

    public AddressBuilder setContact(Contact contact){
        this.contact = contact;
        return this;
    }

    public Address build() {return new Address(type, road, number, box, cp, town, country, employee, organization, contact);}
}
