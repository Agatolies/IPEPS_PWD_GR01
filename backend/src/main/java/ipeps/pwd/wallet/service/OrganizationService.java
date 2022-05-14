package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.OrganizationCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.OrganizationUpdatePayload;

public interface OrganizationService {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(OrganizationUpdatePayload payload);
    ApiResponse create(OrganizationCreatePayload payload);
    ApiResponse delete(int id);
}
