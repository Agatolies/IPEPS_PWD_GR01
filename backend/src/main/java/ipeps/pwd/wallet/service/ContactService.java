package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.ContactCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.ContactUpdatePayload;

import java.util.UUID;

public interface ContactService {
    ApiResponse list();
    ApiResponse detail(UUID id);
    ApiResponse update(ContactUpdatePayload payload);
    ApiResponse create(ContactCreatePayload payload);
    ApiResponse delete(UUID id);
}
