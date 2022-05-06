package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class WalletController {
    @Autowired
    WalletRepository walletRepository;
}
