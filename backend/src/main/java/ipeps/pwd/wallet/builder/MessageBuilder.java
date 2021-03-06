package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Message;
import ipeps.pwd.wallet.entity.Messenger;

import java.util.Date;

public class MessageBuilder {

    private boolean isRead;
    private String message = "";
    private Date date = new Date();
    private Messenger messenger;
    private Employee employee;

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

    public MessageBuilder setMessenger(Messenger messenger) {
        this.messenger = messenger;
        return this;
    }

    public MessageBuilder setEmployee(Employee employee) {
        this.employee = employee;
        return this;
    }

    public Message build() {
        return new Message(isRead, message, date,
                employee, messenger);
    }
}
