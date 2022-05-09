package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.TransactionBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Transaction;
import ipeps.pwd.wallet.payload.createPayload.TransactionCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.TransactionUpdatePayload;
import ipeps.pwd.wallet.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("transaction")
public class TransactionController {
    @Autowired
    TransactionRepository transactionRepository;

    @GetMapping("list")
    public ApiResponse list(){
        try {
            return new ApiResponse(true, transactionRepository.findAll(), "api.transaction.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.transaction.list.error");
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
        try {
            Transaction transaction = transactionRepository.findById(id).orElse(null);
            if (transaction != null) {
                return new ApiResponse(true, transaction, "api.transaction.detail.success");
            } else {
                return new ApiResponse(true, null, "api.transaction.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.transaction.detail.error");
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody TransactionUpdatePayload payload) {
        try{
            Transaction transaction = transactionRepository.findById(payload.getTransaction_id()).orElse(null);
            if(transaction != null){
                transactionRepository.save(transaction);
                return new ApiResponse(true,null, "api.transaction.update.success");
            }else{
                return new ApiResponse(true,null, "api.transaction.update.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.transaction.update.error");
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody TransactionCreatePayload payload) {
        try{
            Transaction transaction = new TransactionBuilder().setType(payload.getType()).build();
            return new ApiResponse(true, transactionRepository.save(transaction), "api.transaction.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.transaction.create.error");
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        try{
            Transaction transaction = transactionRepository.findById(id).orElse(null);
            if(transaction != null){
                transactionRepository.delete(transaction);
                return new ApiResponse(true,null, "api.transaction.delete.success");
            }else{
                return new ApiResponse(true,null, "api.transaction.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.transaction.delete.error");
        }
    }
}
