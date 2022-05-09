package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.SalaryBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Salary;
import ipeps.pwd.wallet.payload.createPayload.SalaryCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.SalaryUpdatePayload;
import ipeps.pwd.wallet.repository.SalaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("salary")
public class SalaryController {
    @Autowired
    SalaryRepository salaryRepository;

    @GetMapping("list")
    public ApiResponse list(){
        try {
            return new ApiResponse(true, salaryRepository.findAll(), "api.salary.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.salary.list.error");
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
        try {
            Salary salary = salaryRepository.findById(id).orElse(null);
            if (salary != null) {
                return new ApiResponse(true, salary, "api.salary.detail.success");
            } else {
                return new ApiResponse(true, null, "api.salary.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.salary.detail.error");
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody SalaryUpdatePayload payload) {
        try{
            Salary salary = salaryRepository.findById(payload.getSalary_id()).orElse(null);
            if(salary != null){
                salaryRepository.save(salary);
                return new ApiResponse(true,null, "api.salary.update.success");
            }else{
                return new ApiResponse(true,null, "api.salary.update.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.salary.update.error");
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody SalaryCreatePayload payload) {
        try{
            Salary salary = new SalaryBuilder().setType(payload.getType()).build();
            return new ApiResponse(true, salaryRepository.save(salary), "api.salary.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.salary.create.error");
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        try{
            Salary salary = salaryRepository.findById(id).orElse(null);
            if(salary != null){
                salaryRepository.delete(salary);
                return new ApiResponse(true,null, "api.salary.delete.success");
            }else{
                return new ApiResponse(true,null, "api.salary.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.salary.delete.error");
        }
    }
}
