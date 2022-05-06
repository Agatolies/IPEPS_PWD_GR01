package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class AccountController {
    @Autowired
    AccountRepository accountRepository;
}
