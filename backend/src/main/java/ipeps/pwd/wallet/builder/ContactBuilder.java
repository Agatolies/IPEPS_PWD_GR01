package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Address;
import ipeps.pwd.wallet.entity.Contact;

import java.util.ArrayList;
import java.util.List;

public class ContactBuilder {
    private String firstname = "";
    private String lastname = "";
    private String email = "";
    private String phone = "";
    private List<Address> addresses = new ArrayList<>();

    public ContactBuilder setFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }

    public ContactBuilder setLastname(String lastname) {
    this.lastname = lastname;
        return this;
    }

    public ContactBuilder setEmail(String email) {
        this.email = email;
        return this;
    }

    public ContactBuilder setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public ContactBuilder setAddresses(List<Address> addresses) {
        this.addresses = addresses;
        return this;
    }

    public Contact build() {return new Contact(firstname, lastname, email, phone, addresses);}
}
