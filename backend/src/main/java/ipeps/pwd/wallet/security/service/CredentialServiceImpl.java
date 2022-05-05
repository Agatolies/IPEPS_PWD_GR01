package ipeps.pwd.wallet.security.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.security.entity.Credential;
import ipeps.pwd.wallet.security.entity.payload.SignupRequest;
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
    PasswordEncoder encoder;

    @Override
    public Credential saveCredential(Credential credential) {
        return credentialRepository.save(credential);
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
                    Credential credential = this.saveCredential(new Credential.Builder()
                            .setUsername(request.getUsername())
                            .setPassword(encoder.encode(request.getPassword()))
                            .setActif(true)
                            .build());
                    return new ApiResponse(true, credential, null);
                } catch (Exception e) {
                    e.printStackTrace();
                    return new ApiResponse(false, null, "api.signup.database-insert-error");
                }
            }
        } else {
            return result;
        }
    }
}
