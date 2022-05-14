package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.createPayload.MessengerCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessengerUpdatePayload;

public interface MessengerService {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(MessengerUpdatePayload payload);
    ApiResponse create(MessengerCreatePayload payload);
    ApiResponse delete(int id);
}
