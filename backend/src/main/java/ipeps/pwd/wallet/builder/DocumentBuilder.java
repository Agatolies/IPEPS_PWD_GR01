package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Document;
import ipeps.pwd.wallet.entity.Transaction;

import javax.print.Doc;

public class DocumentBuilder {

    private String name = "";
    private String description = "";
    private String path = "";
    private String type = "";
    private boolean freeAccess;
    private Transaction transaction = new Transaction();

    public DocumentBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public DocumentBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public DocumentBuilder setPath(String path) {
        this.path = path;
        return this;
    }

    public DocumentBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public DocumentBuilder setFreeAccess(boolean freeAccess) {
        this.freeAccess = freeAccess;
        return this;
    }

    public DocumentBuilder setTransaction(Transaction transaction) {
        this.transaction = transaction;
        return this;
    }

    public Document build() {
        return new Document(name, description, path, type, freeAccess, transaction);
    }
}
