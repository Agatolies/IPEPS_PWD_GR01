package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.EmployeeBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.repository.EmployeeRepository;
import ipeps.pwd.wallet.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

// Liste des méthodes qui font appel aux données locales dans le backend

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public ApiResponse list() {
        try {
            return new ApiResponse(true, employeeRepository.findAll(), "api.employee.list.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.employee.list.error");
        }
    }

    @Override
    public ApiResponse detail(UUID id) {
        try {
            Employee employee = employeeRepository.findById(id).orElse(null);
            if (employee != null) {
                return new ApiResponse(true, employee, "api.employee.detail.success");
            } else {
                return new ApiResponse(true, null, "api.employee.detail.not-found");
            }
        } catch (Exception e) {
            e.printStackTrace();//pour afficher le message d'erreur dans la console
            return new ApiResponse(false, e.getMessage(), "api.employee.detail.error");
        }
    }

    @Override
    public ApiResponse update(EmployeeUpdatePayload payload) {
        try {
            ApiResponse response = this.detail(payload.getEmployee_id());
            if (response.result) {
                Employee employee = (Employee) response.data;
                employee.setRole(payload.getRole());
                employee.setOrganization(payload.getOrganization());
                employee.setActif(payload.isActif());
                employeeRepository.save(employee);
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

            Employee employee = new EmployeeBuilder()
                    .setRole(payload.getRole())
                    .setActif(payload.isActif())
                    .setOrganization(payload.getOrganization())
                    .build();
            return new ApiResponse(true, employeeRepository.save(employee), "api.employee.create.success");

        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.employee.create.error");
        }
    }

    @Override
    public ApiResponse delete(UUID id) {
        try {
            ApiResponse response = this.detail(id);
            if (response.result) {
                Employee employee = (Employee) response.data;
                employeeRepository.delete(employee);
                return new ApiResponse(true, null, "api.employee.delete.success");
            } else {
                return new ApiResponse(true, null, "api.employee.delete.detail-not-found");
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.employee.delete.error");
        }
    }
}
