package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.SalaryBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Salary;
import ipeps.pwd.wallet.payload.createPayload.SalaryCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.SalaryUpdatePayload;
import ipeps.pwd.wallet.repository.SalaryRepository;
import ipeps.pwd.wallet.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class SalaryServiceImpl implements SalaryService {

    @Autowired
    SalaryRepository salaryRepository;

    @Override
    public ApiResponse list(){
        try {
            return new ApiResponse(true, salaryRepository.findAll(), "api.salary.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.salary.list.error");
        }
    }

    @Override
    public ApiResponse detail(UUID id) {
        try {
            Salary salary = salaryRepository.findById(id).orElse(null);
            if (salary != null) {
                return new ApiResponse(true, salary, "api.salary.detail.success");
            } else {
                return new ApiResponse(true, null, "api.salary.detail.not-found");
            }
        } catch (Exception e){
            e.printStackTrace();
            return new ApiResponse(false, e.getMessage(), "api.salary.detail.error");
        }
    }

    @Override
    public ApiResponse update(SalaryUpdatePayload payload) {
        try {
            ApiResponse response = this.detail((payload.getSalary_id()));
            if (response.result) {
                Salary salary = (Salary) response.data;
                salary.setType(salary.getType());
                salary.setBillingDate(payload.getBillingDate());
                salary.setAmount(payload.getAmount());
                salary.setPeriodicity(payload.getPeriodicity());
                salary.setEmployee(payload.getEmployee());
                salaryRepository.save(salary);

                return new ApiResponse(true, null, "api.salary.update.success");
            } else {
                return response;
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.salary.update.error");
        }
    }

    @Override
    public ApiResponse create(SalaryCreatePayload payload) {
        try{
            Salary salary = new SalaryBuilder()
                    .setType(payload.getType())
                    .setBillingDate(payload.getBillingDate())
                    .setAmount(payload.getAmount())
                    .setPeriodicity(payload.getPeriodicity())
                    .build();

            return new ApiResponse(true, salaryRepository.save(salary), "api.salary.create.success");
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.salary.create.error");
        }
    }

    @Override
    public ApiResponse delete(UUID id) {
        try{
            ApiResponse response = this.detail(id);
            if(response.result){
                Salary salary = (Salary) response.data;
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
