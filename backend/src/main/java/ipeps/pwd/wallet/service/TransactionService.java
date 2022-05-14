package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.TransactionCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.TransactionUpdatePayload;

public interface TransactionService {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(TransactionUpdatePayload payload);
    ApiResponse create(TransactionCreatePayload payload);
    ApiResponse delete(int id);
}
