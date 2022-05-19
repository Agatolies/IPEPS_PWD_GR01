package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;

import java.util.UUID;

public interface EmployeeService {
    ApiResponse list();
    ApiResponse detail(UUID id);
    ApiResponse update(EmployeeUpdatePayload payload);
    ApiResponse create(EmployeeCreatePayload payload);
    ApiResponse delete(UUID id);
}
