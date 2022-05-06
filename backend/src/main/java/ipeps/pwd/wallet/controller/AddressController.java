package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class AddressController {
    @Autowired
    AddressRepository addressRepository;
}
