package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.WalletCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.WalletUpdatePayload;

import java.util.UUID;

public interface WalletService {
    ApiResponse list();
    ApiResponse detail(UUID id);
    ApiResponse update(WalletUpdatePayload payload);
    ApiResponse create(WalletCreatePayload payload);
    ApiResponse delete(UUID id);
}
