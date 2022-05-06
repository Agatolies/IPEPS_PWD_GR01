package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

public class ContactController {
    @Autowired
    ContactRepository contactRepository;
}
