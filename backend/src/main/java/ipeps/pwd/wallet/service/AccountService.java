package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.AccountCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.AccountUpdatePayload;

import java.util.UUID;

public interface AccountService {
    ApiResponse list();
    ApiResponse detail(UUID id);
    ApiResponse update(AccountUpdatePayload payload);
    ApiResponse create(AccountCreatePayload payload);
    ApiResponse delete(UUID id);
}
