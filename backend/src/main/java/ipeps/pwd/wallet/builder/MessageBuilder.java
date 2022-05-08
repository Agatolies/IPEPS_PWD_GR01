package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Message;
import ipeps.pwd.wallet.entity.MessageAction;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MessageBuilder {

    private boolean isRead;
    private String message = "";
    private Date date = new Date();
    private List<MessageAction> messageActions = new ArrayList<>();

    public MessageBuilder setIsRead(boolean isRead) {
        this.isRead = isRead;
        return this;
    }

    public MessageBuilder setMessage(String message) {
        this.message = message;
        return this;
    }

    public MessageBuilder setDate(Date date){
        this.date = date;
        return this;
    }

    public MessageBuilder setMessageActions(List<MessageAction> messageActions) {
        this.messageActions = messageActions;
        return this;
    }

    public Message build() {
        return new Message(isRead, message, date, messageActions);
    }
}
