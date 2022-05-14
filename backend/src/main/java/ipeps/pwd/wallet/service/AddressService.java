package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.AddressCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.AddressUpdatePayload;

public interface AddressService {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(AddressUpdatePayload payload);
    ApiResponse create(AddressCreatePayload payload);
    ApiResponse delete(int id);
}
