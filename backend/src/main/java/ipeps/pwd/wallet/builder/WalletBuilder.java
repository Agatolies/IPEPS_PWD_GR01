package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Transaction;
import ipeps.pwd.wallet.entity.Wallet;

import java.util.ArrayList;
import java.util.List;

public class WalletBuilder {

    private String name = "";
    private String description = "";
    private boolean actif;
    private String type = "";
    private List<Transaction> transactions = new ArrayList<>();

    public WalletBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public WalletBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public WalletBuilder setActif(boolean actif) {
        this.actif = actif;
        return this;
    }

    public WalletBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public WalletBuilder setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
        return this;
    }

    public Wallet build(){
        return new Wallet(name, description, actif, type, transactions);
    }
}
