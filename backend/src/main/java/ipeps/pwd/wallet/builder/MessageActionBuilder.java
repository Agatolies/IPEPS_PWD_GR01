package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Message;
import ipeps.pwd.wallet.entity.MessageAction;

import java.util.Date;

public class MessageActionBuilder {

    private String type = "";
    private Date actionDate = new Date();
    private Message message;
    private Employee employee;

    public MessageActionBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public MessageActionBuilder setActionDate(Date actionDate) {
        this.actionDate = actionDate;
        return this;
    }

    public MessageActionBuilder setMessage(Message message) {
        this.message = message;
        return this;
    }

    public MessageActionBuilder setEmployee(Employee employee) {
        this.employee = employee;
        return this;
    }

    public MessageAction build() {
        return new MessageAction(type, actionDate, message, employee);
    }
}
