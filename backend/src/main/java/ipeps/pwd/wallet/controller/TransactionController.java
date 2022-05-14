package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.TransactionBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Transaction;
import ipeps.pwd.wallet.payload.createPayload.TransactionCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.TransactionUpdatePayload;
import ipeps.pwd.wallet.repository.TransactionRepository;
import ipeps.pwd.wallet.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("transaction")
public class TransactionController {
    @Autowired
    TransactionService transactionService;

    @GetMapping("list")
    public ApiResponse list(){ return transactionService.list(); }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) { return transactionService.detail(id); }

    @PutMapping("update")
    public ApiResponse update(@RequestBody TransactionUpdatePayload payload) { return transactionService.update(payload); }

    @PostMapping("create")
    public ApiResponse create(@RequestBody TransactionCreatePayload payload) { return transactionService.create(payload); }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) { return transactionService.delete(id);
    }
}
