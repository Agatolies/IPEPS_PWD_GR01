package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.TransactionBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Transaction;
import ipeps.pwd.wallet.payload.createPayload.TransactionCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.TransactionUpdatePayload;
import ipeps.pwd.wallet.repository.TransactionRepository;
import ipeps.pwd.wallet.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    TransactionRepository transactionRepository;

    @Override
    public ApiResponse list(){
        try {
            return new ApiResponse(true, transactionRepository.findAll(), "api_transaction.list.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api_transaction.list.error");
        }
    }

    @Override
    public ApiResponse detail(int id) {
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

    @Override
    public ApiResponse update(TransactionUpdatePayload payload){
        try {
            ApiResponse response = this.detail(payload.getTransaction_id());
            if (response.result){
                Transaction transaction = (Transaction) response.data;
                transactionRepository.save(transaction);
                return new ApiResponse(true, null, "api.transaction.update.success");
            } else {
                return response;
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.transaction.update.error");
        }
    }

    @Override
    public ApiResponse create(TransactionCreatePayload payload){
        try {
            Transaction transaction = new TransactionBuilder().setType(payload.getType()).setAmount(payload.getAmount()).build();
            return new ApiResponse(true, transactionRepository.save(transaction), "api.transaction.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.transaction.create.error");
        }
    }

    @Override
    public ApiResponse delete(int id){
        try {
            ApiResponse response = this.detail(id);
            if (response.result){
                Transaction transaction = (Transaction) response.data;
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

