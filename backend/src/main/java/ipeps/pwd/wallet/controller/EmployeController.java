package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.DocumentBuilder;
import ipeps.pwd.wallet.builder.EmployeeBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Document;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.payload.createPayload.DocumentCreatePayload;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.ContactUpdatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.repository.EmployeRepository;
import ipeps.pwd.wallet.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("employee")
public class EmployeController {
    @Autowired
    EmployeeService employeeService;

    @GetMapping("list")
    public ApiResponse list(){
        return employeeService.list();
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
        return employeeService.detail(id);
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody EmployeeUpdatePayload payload) {
        return employeeService.update(payload);
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody EmployeeCreatePayload payload) {
        return employeeService.create(payload);
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        return employeeService.delete(id);
    }
}
