package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class MessageController {
    @Autowired
    MessageRepository messageRepository;
}
