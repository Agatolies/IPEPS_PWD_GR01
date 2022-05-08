package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.AccountBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Account;
import ipeps.pwd.wallet.payload.createPayload.AccountCreatePayload;
import ipeps.pwd.wallet.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("account")
@RestController
public class AccountController {
    @Autowired
    AccountRepository accountRepository;

    @GetMapping("list")
    public ApiResponse list(){
        try {
            return new ApiResponse(true, accountRepository.findAll(), "api.account.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.account.list.error");
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
        try {
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
}
