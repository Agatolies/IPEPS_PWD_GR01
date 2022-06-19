package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.WalletCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.WalletUpdatePayload;
import ipeps.pwd.wallet.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("wallet")
public class WalletController {
    @Autowired
    WalletService walletService;

    @GetMapping("list")
    public ApiResponse list(){ return walletService.list(); }

    @GetMapping("list/{employeeId}")
    public ApiResponse listByEmployeeId(@PathVariable("employeeId") UUID employeeId) {
        return walletService.listByEmployeeId(employeeId);
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) { return walletService.detail(id); }

    @PutMapping("update")
    public ApiResponse update(@RequestBody WalletUpdatePayload payload) { return walletService.update(payload); }

    @PostMapping("create")
    public ApiResponse create(@RequestBody WalletCreatePayload payload) { return walletService.create(payload); }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) { return walletService.delete(id); }
}
