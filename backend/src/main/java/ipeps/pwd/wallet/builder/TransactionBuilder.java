package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Document;
import ipeps.pwd.wallet.entity.Transaction;
import ipeps.pwd.wallet.entity.Wallet;

public class TransactionBuilder {

    private String type = "";
    private float amount;
    private Document document = null;
    private Wallet wallet = null;

    public TransactionBuilder setType(String type){
        this.type = type;
        return this;
    }

    public TransactionBuilder setAmount(float amount){
        this.amount = amount;
        return this;
    }

    public TransactionBuilder setDocument(Document document){
        this.document = document;
        return this;
    }

    public TransactionBuilder setWallet(Wallet wallet){
        this.wallet = wallet;
        return this;
    }

    public Transaction build(){
        return new Transaction(type, amount, document, wallet);
    }
}
