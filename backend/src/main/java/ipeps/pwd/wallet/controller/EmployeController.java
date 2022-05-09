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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("employee")
public class EmployeController {
    @Autowired
    EmployeRepository employeRepository;

    @GetMapping("list")
    public ApiResponse list(){
        try {
            return new ApiResponse(true, employeRepository.findAll(), "api.employee.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.employee.list.error");
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
        try {
            Employee employee = employeRepository.findById(id).orElse(null);
            if (employee != null) {
                return new ApiResponse(true, employee, "api.employee.detail.success");
            } else {
                return new ApiResponse(true, null, "api.employee.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.employee.detail.error");
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody EmployeeUpdatePayload payload) {
        try{
            Employee employee = employeRepository.findById(payload.getEmployee_id()).orElse(null);
            if(employee != null){
                employeRepository.save(employee);
                return new ApiResponse(true,null, "api.employee.update.success");
            }else{
                return new ApiResponse(true,null, "api.employee.update.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.employee.update.error");
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody EmployeeCreatePayload payload) {
        try{
            Employee employee = new EmployeeBuilder().setRole(payload.getRole()).build();
            return new ApiResponse(true, employeRepository.save(employee), "api.employee.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.employee.create.error");
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        try{
            Employee employee = employeRepository.findById(id).orElse(null);
            if(employee != null){
                employeRepository.delete(employee);
                return new ApiResponse(true,null, "api.employee.delete.success");
            }else{
                return new ApiResponse(true,null, "api.employee.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.employee.delete.error");
        }
    }
}
