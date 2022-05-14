package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.MessageCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessageUpdatePayload;

public interface MessageService {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(MessageUpdatePayload payload);
    ApiResponse create(MessageCreatePayload payload);
    ApiResponse delete(int id);
}
