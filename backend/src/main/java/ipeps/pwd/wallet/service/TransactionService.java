package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.TransactionCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.TransactionUpdatePayload;

import java.util.UUID;

public interface TransactionService {
    ApiResponse list();
    ApiResponse detail(UUID id);
    ApiResponse update(TransactionUpdatePayload payload);
    ApiResponse create(TransactionCreatePayload payload);
    ApiResponse delete(UUID id);
}
