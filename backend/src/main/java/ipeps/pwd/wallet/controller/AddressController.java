package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.AddressBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Address;
import ipeps.pwd.wallet.payload.createPayload.AddressCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.AccountUpdatePayload;
import ipeps.pwd.wallet.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("address")
public class AddressController {
    @Autowired
    AddressRepository addressRepository;

    @GetMapping("list")
    public ApiResponse list(){
        try {
            return new ApiResponse(true, addressRepository.findAll(), "api.address.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.address.list.error");
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
        try {
            Address address = addressRepository.findById(id).orElse(null);
            if (address != null) {
                    return new ApiResponse(true, address, "api.address.detail.success");
            } else {
                return new ApiResponse(true, null, "api.address.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.address.detail.error");
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody AccountUpdatePayload payload) {
        try{
            Address address = addressRepository.findById(payload.getAccount_id()).orElse(null);
            if(address != null){
                addressRepository.save(address);
                return new ApiResponse(true,null, "api.address.update.success");
            }else{
                return new ApiResponse(true,null, "api.address.update.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.address.update.error");
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody AddressCreatePayload payload) {
        try{
            Address address = new AddressBuilder().setType(payload.getType()).build();
            return new ApiResponse(true, addressRepository.save(address), "api.address.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.address.create.error");
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        try{
            Address address = addressRepository.findById(id).orElse(null);
            if(address != null){
                addressRepository.delete(address);
                return new ApiResponse(true,null, "api.address.delete.success");
            }else{
                return new ApiResponse(true,null, "api.address.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.address.delete.error");
        }
    }
}
