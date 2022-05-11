package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;

public interface EmployeeService {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(EmployeeUpdatePayload payload);
    ApiResponse create(EmployeeCreatePayload payload);
    ApiResponse delete(int id);
}
