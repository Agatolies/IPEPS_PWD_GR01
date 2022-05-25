package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.SalaryCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.SalaryUpdatePayload;
import ipeps.pwd.wallet.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("salary")
public class SalaryController {
    @Autowired
    SalaryService salaryService;

    @GetMapping("list")
    public ApiResponse list(){ return salaryService.list();}

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) { return salaryService.detail(id);}

    @PutMapping("update")
    public ApiResponse update(@RequestBody SalaryUpdatePayload payload) { return salaryService.update(payload);}

    @PostMapping("create")
    public ApiResponse create(@RequestBody SalaryCreatePayload payload) { return salaryService.create(payload);}

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) { return salaryService.delete(id);}
}
