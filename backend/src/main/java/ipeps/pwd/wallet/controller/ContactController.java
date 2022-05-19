package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.ContactCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.ContactUpdatePayload;
import ipeps.pwd.wallet.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("contact")
public class ContactController {
    @Autowired
    ContactService contactService;

    @GetMapping("list")
    public ApiResponse list(){ return contactService.list(); }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){ return contactService.detail(id); }

    @PutMapping("update")
    public ApiResponse update(@RequestBody ContactUpdatePayload payload){ return contactService.update(payload); }

    @PostMapping("create")
    public ApiResponse create(@RequestBody ContactCreatePayload payload){ return contactService.create(payload); }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id){ return contactService.delete(id); }
}
