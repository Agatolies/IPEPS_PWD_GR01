package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.SalaryCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.SalaryUpdatePayload;

public interface SalaryService {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(SalaryUpdatePayload payload);
    ApiResponse create(SalaryCreatePayload payload);
    ApiResponse delete(int id);
}
