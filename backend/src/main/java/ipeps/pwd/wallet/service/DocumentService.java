package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.DocumentCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.DocumentUpdatePayload;

import java.util.UUID;

public interface DocumentService {
    ApiResponse list();
    ApiResponse detail(UUID id);
    ApiResponse update(DocumentUpdatePayload payload);
    ApiResponse create(DocumentCreatePayload payload);
    ApiResponse delete(UUID  id);
}
