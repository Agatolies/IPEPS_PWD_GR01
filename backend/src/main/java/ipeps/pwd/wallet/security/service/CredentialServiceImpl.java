package ipeps.pwd.wallet.security.service;

import ipeps.pwd.wallet.builder.AccountBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.security.entity.payload.SignupRequest;
import ipeps.pwd.wallet.entity.Account;
import ipeps.pwd.wallet.repository.AccountRepository;
import ipeps.pwd.wallet.security.entity.Credential;
import ipeps.pwd.wallet.security.repository.CredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class CredentialServiceImpl implements CredentialService {

    @Autowired
    CredentialRepository credentialRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    PasswordEncoder encoder;

    @Override
    public Credential saveCredential(Credential credential) {
        return credentialRepository.save(credential);
    }

    public Account saveAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Credential findCredentialByUsername(String username) {
        return credentialRepository.findByUsername(username);
    }

    @Override
    public ApiResponse signup(SignupRequest request){
        ApiResponse result = request.isValid();
        if (result.isSuccess()) {
            if (credentialRepository.existsByUsername(request.getUsername())) {
                return new ApiResponse(false, null, "api.signup.email-exist");
            } else {
                try {
                    Account account = new AccountBuilder()
                            .setFirstname(request.getFirstname())
                            .setLastname(request.getLastname())
                            .build();

                    account = this.saveAccount(account);

                    Credential credential = new Credential.Builder()
                            .setUsername(request.getUsername())
                            .setPassword(encoder.encode(request.getPassword()))
                            .setActif(true)
                            .setAccount(account)
                            .build();

                    credential = this.saveCredential(credential);

                    account.setCredential(credential);
                    this.saveAccount(account);

                    return new ApiResponse(true, credential, null);
                } catch (Exception e) {
                    e.printStackTrace();
                    return new ApiResponse(false, e.getMessage(), "api.signup.database-insert-error");
                }
            }
        } else {
            return result;
        }
    }
}
