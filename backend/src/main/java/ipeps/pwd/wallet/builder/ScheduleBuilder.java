package ipeps.pwd.wallet.builder;

import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Schedule;

import java.util.Date;

public class ScheduleBuilder {

    private String type = "";
    private Date dateSchedule = new Date();
    private String comment = "";
    private Employee employee = null;

    public ScheduleBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public ScheduleBuilder setDateSchedule(Date dateSchedule) {
        this.dateSchedule = dateSchedule;
        return this;
    }

    public ScheduleBuilder setComment(String  comment) {
        this.comment = comment;
        return this;
    }

    public ScheduleBuilder setEmployee(Employee employee){
        this.employee = employee;
        return this;
    }

    public Schedule build(){
        return new Schedule(type, dateSchedule, comment, employee);
    }
}
