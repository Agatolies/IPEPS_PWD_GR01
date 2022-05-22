package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.MessageCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessageUpdatePayload;

import java.util.UUID;

public interface MessageService {
    ApiResponse list();
    ApiResponse detail(UUID id);
    ApiResponse update(MessageUpdatePayload payload);
    ApiResponse create(MessageCreatePayload payload);
    ApiResponse delete(UUID id);
}
