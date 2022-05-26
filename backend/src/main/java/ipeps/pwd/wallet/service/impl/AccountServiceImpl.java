package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.AccountBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Account;
import ipeps.pwd.wallet.payload.createPayload.AccountCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.AccountUpdatePayload;
import ipeps.pwd.wallet.repository.AccountRepository;
import ipeps.pwd.wallet.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    AccountRepository accountRepository;

    @Override
    public ApiResponse list(){
        try {
            return new ApiResponse(true, accountRepository.findAll(), "api.account.list.success");
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.account.list.error");
        }
    }

    @Override
    public ApiResponse detail(UUID id) {
        try{
            Account account = accountRepository.findById(id).orElse(null);
            if (account != null) {
                return new ApiResponse(true, account, "api.account.detail.success");
            } else {
                return new ApiResponse(true, null, "api.account.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.account.detail.error");
        }
    }

    @Override
    public ApiResponse update(AccountUpdatePayload payload) {
        try{
            ApiResponse response = this.detail(payload.getAccount_id());
            if(response.result){
                Account account = (Account) response.data;
                account.setFirstname(payload.getFirstname());
                account.setLastname(payload.getLastname());
                account.setCredential(payload.getCredential());
                account.setEmployees(payload.getEmployees());
                accountRepository.save(account);
                return new ApiResponse(true,null, "api.account.update.success");
            }else{
                return response;
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.account.update.error");
        }
    }

    @Override
    public ApiResponse create(AccountCreatePayload payload) {
        try{
            Account account = new AccountBuilder()
                    .setFirstname(payload.getFirstname())
                    .setLastname(payload.getLastname())
                    .build();
            return new ApiResponse(true, accountRepository.save(account), "api.account.create.success");
        } catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.account.create.error");
        }
    }

    @Override
    public ApiResponse delete(UUID id) {
        try{
            ApiResponse response = this.detail(id);
            if(response.result){
                accountRepository.delete((Account) response.data);
                return new ApiResponse(true,null, "api.account.delete.success");
            }else{
                return new ApiResponse(true,null, "api.account.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.account.delete.error");
        }
    }
}
