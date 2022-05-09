package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.WalletBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Wallet;
import ipeps.pwd.wallet.payload.createPayload.WalletCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.WalletUpdatePayload;
import ipeps.pwd.wallet.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("wallet")
public class WalletController {
    @Autowired
    WalletRepository walletRepository;

    @GetMapping("list")
    public ApiResponse list(){
        try {
            return new ApiResponse(true, walletRepository.findAll(), "api.wallet.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.wallet.list.error");
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
        try {
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

    @PutMapping("update")
    public ApiResponse update(@RequestBody WalletUpdatePayload payload) {
        try{
            Wallet wallet = walletRepository.findById(payload.getWallet_id()).orElse(null);
            if(wallet != null){
                walletRepository.save(wallet);
                return new ApiResponse(true,null, "api.wallet.update.success");
            }else{
                return new ApiResponse(true,null, "api.wallet.update.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.wallet.update.error");
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody WalletCreatePayload payload) {
        try{
            Wallet wallet = new WalletBuilder().setName(payload.getName()).build();
            return new ApiResponse(true, walletRepository.save(wallet), "api.wallet.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.wallet.create.error");
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        try{
            Wallet wallet = walletRepository.findById(id).orElse(null);
            if(wallet != null){
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
