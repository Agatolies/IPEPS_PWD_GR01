package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.DocumentCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.DocumentUpdatePayload;

public interface DocumentService {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(DocumentUpdatePayload payload);
    ApiResponse create(DocumentCreatePayload payload);
    ApiResponse delete(int id);
}
