package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.EmployeeBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.repository.MessageActionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

public class MessageActionController {
    @Autowired
    MessageActionRepository messageActionRepository;


}
