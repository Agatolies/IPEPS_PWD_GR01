package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.WalletCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.WalletUpdatePayload;

public interface WalletService {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(WalletUpdatePayload payload);
    ApiResponse create(WalletCreatePayload payload);
    ApiResponse delete(int id);
}
