package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.WalletBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.entity.Wallet;
import ipeps.pwd.wallet.payload.createPayload.WalletCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.WalletUpdatePayload;
import ipeps.pwd.wallet.repository.EmployeeRepository;
import ipeps.pwd.wallet.repository.OrganizationRepository;
import ipeps.pwd.wallet.repository.WalletRepository;
import ipeps.pwd.wallet.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.UUID;

@Service
public class WalletServiceImpl implements WalletService {

    @Autowired
    WalletRepository walletRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    OrganizationRepository organizationRepository;

    @Override
    public ApiResponse list(){
        try {
            return new ApiResponse(true, walletRepository.findAll(), "api.wallet.list.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.wallet.list.error");
        }
    }

//    @Override
//    public ApiResponse listByEmployeeId(UUID employeeId) {
//        try {
//            return new ApiResponse(true, walletRepository.findByEmployeeId(employeeId), "api.wallet.list.success");
//        } catch (Exception e) {
//            return new ApiResponse(false, null, "api.wallet.list.error");
//        }
//    }

    @Override
    public ApiResponse detail(UUID id){
        try{
            Wallet wallet = walletRepository.findById(id).orElse(null);
            if (wallet != null) {
                return new ApiResponse(true, wallet, "api.wallet.detail.success");
            } else {
                return new ApiResponse(true, null, "api.wallet.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.wallet.detail.error");
        }
    }

    @Override
    public ApiResponse update(WalletUpdatePayload payload){
        try {
            ApiResponse response = this.detail(payload.getWallet_id());
            if (response.result){
                Wallet wallet = (Wallet) response.data;
                wallet.setName((payload.getName()));
                wallet.setDescription(payload.getDescription());
                wallet.setType(payload.getType());
                walletRepository.save(wallet);
                return new ApiResponse(true,null, "api.wallet.update.success");
            }else{
                return response;
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.wallet.update.error");
        }
    }

    @Override
    public ApiResponse create(WalletCreatePayload payload){
        try {
            UUID employeeId = UUID.fromString(payload.getEmployeeId());
            UUID organizationId = UUID.fromString(payload.getOrganizationId());

            Employee employee = employeeRepository.findById(employeeId).orElse(null);
            Organization organization = organizationRepository.findById(organizationId).orElse(null);

            Wallet wallet = new WalletBuilder()
                    .setName(payload.getName())
                    .setDescription(payload.getDescription())
                    .setType(payload.getType())
                    .setEmployee(employee)
                    .setOrganization(organization)
                    .build();

            employee.getWallets().add(wallet);
            employeeRepository.save(employee);

            return new ApiResponse(true, walletRepository.save(wallet), "api.wallet.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.wallet.create.error");
        }
    }

    @Override
    public ApiResponse delete(UUID id){
        try {
            ApiResponse response = this.detail(id);
            if (response.result){
                Wallet wallet = (Wallet) response.data;
                walletRepository.delete(wallet);
                return new ApiResponse(true,null, "api.wallet.delete.success");
            }else{
                return new ApiResponse(true,null, "api.wallet.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.wallet.delete.error");
        }
    }
}

