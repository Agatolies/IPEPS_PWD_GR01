package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.EmployeeBuilder;
import ipeps.pwd.wallet.builder.OrganizationBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.createPayload.OrganizationCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.payload.updatePayload.OrganizationUpdatePayload;
import ipeps.pwd.wallet.repository.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("organization")
public class OrganizationController {
    @Autowired
    OrganizationRepository organizationRepository;

    @GetMapping("list")
    public ApiResponse list(){
        try {
            return new ApiResponse(true, organizationRepository.findAll(), "api.organization.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.organization.list.error");
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
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

    @PutMapping("update")
    public ApiResponse update(@RequestBody OrganizationUpdatePayload payload) {
        try{
            Organization organization = organizationRepository.findById(payload.getOrganization_id()).orElse(null);
            if(organization != null){
                organizationRepository.save(organization);
                return new ApiResponse(true,null, "api.organization.update.success");
            }else{
                return new ApiResponse(true,null, "api.organization.update.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.organization.update.error");
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody OrganizationCreatePayload payload) {
        try{
            Organization organization = new OrganizationBuilder().setName(payload.getName()).build();
            return new ApiResponse(true, organizationRepository.save(organization), "api.organization.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.organization.create.error");
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        try{
            Organization organization = organizationRepository.findById(id).orElse(null);
            if(organization != null){
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
