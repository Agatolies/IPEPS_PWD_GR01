package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.AccountCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.AccountUpdatePayload;

public interface AccountService {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(AccountUpdatePayload payload);
    ApiResponse create(AccountCreatePayload payload);
    ApiResponse delete(int id);
}
