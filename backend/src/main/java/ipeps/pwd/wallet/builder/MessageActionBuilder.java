package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Message;
import ipeps.pwd.wallet.entity.MessageAction;

import java.util.Date;

public class MessageActionBuilder {

    private String type = "";
    private Date actionDate = new Date();

    public MessageActionBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public MessageActionBuilder setActionDate(Date actionDate) {
        this.actionDate = actionDate;
        return this;
    }

    public MessageAction build() {
        return new MessageAction(type, actionDate);
    }
}
