package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class TransactionController {
    @Autowired
    TransactionRepository transactionRepository;
}
