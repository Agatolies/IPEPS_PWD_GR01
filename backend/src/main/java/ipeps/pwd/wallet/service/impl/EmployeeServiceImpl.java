package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.EmployeeBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.repository.EmployeRepository;
import ipeps.pwd.wallet.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// Liste des méthodes qui font appel aux données locales dans le backend

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeRepository employeRepository;

    @Override
    public ApiResponse list() {
        try {
            return new ApiResponse(true, employeRepository.findAll(), "api.employee.list.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.employee.list.error");
        }
    }


    @Override
    public ApiResponse detail(int id) {
        try {
            Employee employee = employeRepository.findById(id).orElse(null);
            if (employee != null) {
                return new ApiResponse(true, employee, "api.employee.detail.success");
            } else {
                return new ApiResponse(true, null, "api.employee.detail.not-found");
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.employee.detail.error");
        }
    }


    @Override
    public ApiResponse update(EmployeeUpdatePayload payload) {

        try {
            ApiResponse response = this.detail(payload.getEmployee_id());
            if (response.result) {
                Employee employee = (Employee) response.data;
                employeRepository.save(employee);
                return new ApiResponse(true, null, "api.employee.update.success");
            } else {
                return response;
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.employee.update.error");
        }
    }

    @Override
    public ApiResponse create(EmployeeCreatePayload payload) {
        try {
            Employee employee = new EmployeeBuilder().setRole(payload.getRole()).build();
            return new ApiResponse(true, employeRepository.save(employee), "api.employee.create.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.employee.create.error");
        }
    }


    @Override
    public ApiResponse delete(int id) {
        try {
            ApiResponse response = this.detail(id);
            if (response.result) {
                Employee employee = (Employee) response.data;
                employeRepository.delete(employee);
                return new ApiResponse(true, null, "api.employee.delete.success");
            } else {
                return new ApiResponse(true, null, "api.employee.delete.detail-not-found");
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.employee.delete.error");
        }
    }
}
