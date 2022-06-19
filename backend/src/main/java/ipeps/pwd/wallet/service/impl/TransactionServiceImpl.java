package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.TransactionBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Transaction;
import ipeps.pwd.wallet.entity.Wallet;
import ipeps.pwd.wallet.payload.createPayload.TransactionCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.TransactionUpdatePayload;
import ipeps.pwd.wallet.repository.DocumentRepository;
import ipeps.pwd.wallet.repository.EmployeeRepository;
import ipeps.pwd.wallet.repository.TransactionRepository;
import ipeps.pwd.wallet.repository.WalletRepository;
import ipeps.pwd.wallet.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    TransactionRepository transactionRepository;

    @Autowired
    WalletRepository walletRepository;

    @Autowired
    DocumentRepository documentRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public ApiResponse list() {
        try {
            return new ApiResponse(true, transactionRepository.findAll(), "api_transaction.list.success");
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse(false, e.getMessage(), "api_transaction.list.error");
        }
    }

    @Override
    public ApiResponse detail(UUID id) {
        try {
            Transaction transaction = transactionRepository.findById(id).orElse(null);
            if (transaction != null) {
                return new ApiResponse(true, transaction, "api.transaction.detail.success");
            } else {
                return new ApiResponse(true, null, "api.transaction.detail.not-found");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse(false, e.getMessage(), "api.transaction.detail.error");
        }
    }

    @Override
    public ApiResponse update(TransactionUpdatePayload payload) {
        try {
            ApiResponse response = this.detail(payload.getTransaction_id());
            if (response.result) {
                Transaction transaction = (Transaction) response.data;
                transaction.setType(payload.getType());
                transaction.setAmount(payload.getAmount());
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
    public ApiResponse create(TransactionCreatePayload payload) {
        try {
            // Conversion des string en UUID
            UUID walletFromId = UUID.fromString(payload.getWalletFromId());
            UUID walletToId = UUID.fromString(payload.getWalletToId());

            // Récupération des entités nécessaires
            Wallet walletFrom = this.walletRepository.findById(walletFromId).orElse(null);
            Wallet walletTo = this.walletRepository.findById(walletToId).orElse(null);

            //DEBIT transaction portefeuille émetteur
            Transaction debit = new TransactionBuilder()
                    .setType("DEBIT")
                    .setAmount(-payload.getAmount())
                    .setWallet(walletFrom)
                    .build();

            transactionRepository.save(debit);

            //CREDIT transaction portefeuille destinataire
            Transaction credit = new TransactionBuilder()
                    .setType("CREDIT")
                    .setAmount(payload.getAmount())
                    .setWallet(walletTo)
                    .build();

            transactionRepository.save(credit);
//              Comment récupérer l'EmployeeId!!!!
//            Document documentDebit = new DocumentBuilder()
//                    .setName("NOTE DE DEBIT")
//                    .setType("NOTE DE DEBIT")
//                    .setFreeAccess(true)
//                    .setEmployee()
//                    .build();

            return new ApiResponse(true, debit, "api.transaction.create.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.transaction.create.error");
        }
    }

    @Override
    public ApiResponse delete(UUID id) {
        try {
            ApiResponse response = this.detail(id);
            if (response.result) {
                Transaction transaction = (Transaction) response.data;
                transactionRepository.delete(transaction);
                return new ApiResponse(true, null, "api.transaction.delete.success");
            } else {
                return new ApiResponse(true, null, "api.transaction.delete.detail-not-found");
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.transaction.delete.error");
        }
    }
}

