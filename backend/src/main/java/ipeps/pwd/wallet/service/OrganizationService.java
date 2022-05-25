package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.OrganizationCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.OrganizationUpdatePayload;

import java.util.UUID;

public interface OrganizationService {
    ApiResponse list();
    ApiResponse detail(UUID id);
    ApiResponse update(OrganizationUpdatePayload payload);
    ApiResponse create(OrganizationCreatePayload payload);
    ApiResponse delete(UUID id);
}
