package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.MessageActionCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessageActionUpdatePayload;

import java.util.UUID;

public interface MessageActionService {
    ApiResponse list();
    ApiResponse detail(UUID id);
    ApiResponse update(MessageActionUpdatePayload payload);
    ApiResponse create(MessageActionCreatePayload payload);
    ApiResponse delete(UUID id);
}
