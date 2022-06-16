package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.AccountCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.AccountUpdatePayload;
import ipeps.pwd.wallet.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("account")
public class AccountController {
    @Autowired
    AccountService accountService;

    @GetMapping("list")
    public ApiResponse list(){
        return accountService.list();
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {

        return accountService.detail(id);
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody AccountUpdatePayload payload) {
        return accountService.update(payload);
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody AccountCreatePayload payload) {
        return accountService.create(payload);
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) { return accountService.delete(id); }
}
