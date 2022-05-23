package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.SalaryCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.SalaryUpdatePayload;

import java.util.UUID;

public interface SalaryService {
    ApiResponse list();
    ApiResponse detail(UUID id);
    ApiResponse update(SalaryUpdatePayload payload);
    ApiResponse create(SalaryCreatePayload payload);
    ApiResponse delete(UUID id);
}
