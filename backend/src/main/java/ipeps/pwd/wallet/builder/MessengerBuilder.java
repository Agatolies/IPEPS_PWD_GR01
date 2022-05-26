package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Message;
import ipeps.pwd.wallet.entity.Messenger;

import java.util.ArrayList;
import java.util.List;

public class MessengerBuilder {
    private String lastMessage = "";
    private String people = "";
    private List<Employee> employees = new ArrayList<>();
    private List<Message> messages = new ArrayList<>();

    public MessengerBuilder setLastMessage(String lastMessage) {
        this.lastMessage = lastMessage;
        return this;
    }

    public MessengerBuilder setPeople(String people){
        this.people = people;
        return this;
    }

    public MessengerBuilder setEmployees(List<Employee> employees) {
        this.employees = employees;
        return this;
    }

    public MessengerBuilder setMessages(List<Message> messages){
        this.messages = messages;
        return this;
    }

    public Messenger build() {
        return new Messenger(lastMessage, people, employees, messages);
    }
}
