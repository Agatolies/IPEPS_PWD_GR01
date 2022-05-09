package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Address;

public class AddressBuilder {

    private String type = "";
    private String road = "";
    private String number = "";
    private String box = "";
    private String cp = "";
    private String town = "";
    private String country = "";

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

    public Address build() {return new Address(type, road, number, box, cp, town, country);}
}
