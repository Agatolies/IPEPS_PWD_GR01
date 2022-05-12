package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.createPayload.MessageActionCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessageActionUpdatePayload;

public interface MessageAction {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(MessageActionUpdatePayload payload);
    ApiResponse create(MessageActionCreatePayload);
    ApiResponse delete(int id);
}
