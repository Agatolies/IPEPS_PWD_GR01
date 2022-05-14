package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.AddressCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.AddressUpdatePayload;
import ipeps.pwd.wallet.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("address")
public class AddressController {
    @Autowired
    AddressService addressService;

    @GetMapping("list")
    public ApiResponse list(){ return addressService.list(); }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) { return addressService.detail(id); }

    @PutMapping("update")
    public ApiResponse update(@RequestBody AddressUpdatePayload payload) { return addressService.update(payload); }

    @PostMapping("create")
    public ApiResponse create(@RequestBody AddressCreatePayload payload) { return addressService.create(payload); }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) { return addressService.delete(id); }
}
