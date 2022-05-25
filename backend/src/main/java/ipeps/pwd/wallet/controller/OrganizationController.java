package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.OrganizationCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.OrganizationUpdatePayload;
import ipeps.pwd.wallet.service.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("organization")
public class OrganizationController {
    @Autowired
    OrganizationService organizationService;

    @GetMapping("list")
    public ApiResponse list(){ return organizationService.list(); }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){ return organizationService.detail(id); }

    @PutMapping("update")
    public ApiResponse update(@RequestBody OrganizationUpdatePayload payload){ return organizationService.update(payload); }

    @PostMapping("create")
    public ApiResponse create(@RequestBody OrganizationCreatePayload payload){ return organizationService.create(payload); }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id){ return organizationService.delete(id); }
}
