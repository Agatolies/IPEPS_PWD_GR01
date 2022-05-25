package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.OrganizationBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.payload.createPayload.OrganizationCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.OrganizationUpdatePayload;
import ipeps.pwd.wallet.repository.OrganizationRepository;
import ipeps.pwd.wallet.service.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class OrganizationServiceImpl implements OrganizationService {

    @Autowired
    OrganizationRepository organizationRepository;

    @Override
    public ApiResponse list(){
        try {
            return new ApiResponse(true, organizationRepository.findAll(), "api.organization.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.organization.list.error");
        }
    }

    @Override
    public ApiResponse detail(UUID id) {
        try {
            Organization organization = organizationRepository.findById(id).orElse(null);
            if (organization != null) {
                return new ApiResponse(true, organization, "api.organization.detail.success");
            } else {
                return new ApiResponse(true, null, "api.organization.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.organization.detail.error");
        }
    }

    @Override
    public ApiResponse update(OrganizationUpdatePayload payload) {
        try{
            ApiResponse response = this.detail(payload.getOrganization_id());
            if(response.result){
                Organization organization = (Organization) response.data;
                organization.setName(payload.getName());
                organization.setDescription(payload.getDescription());
                organization.setActif(payload.isActif());
                organizationRepository.save(organization);
                return new ApiResponse(true,null, "api.organization.update.success");
            }else{
                return response;
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.organization.update.error");
        }
    }

    @Override
    public ApiResponse create(OrganizationCreatePayload payload) {
        try{
            Organization organization = new OrganizationBuilder()
                    .setName(payload.getName())
                    .setDescription(payload.getDescription())
                    .setActif(payload.isActif())
                    .build();
            return new ApiResponse(true, organizationRepository.save(organization), "api.organization.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.organization.create.error");
        }
    }

    @Override
    public ApiResponse delete(UUID  id) {
        try{
            ApiResponse response = this.detail(id);
            if(response.result){
                Organization organization = (Organization) response.data;
                organizationRepository.delete(organization);
                return new ApiResponse(true,null, "api.organization.delete.success");
            }else{
                return new ApiResponse(true,null, "api.organization.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.organization.delete.error");
        }
    }

}
