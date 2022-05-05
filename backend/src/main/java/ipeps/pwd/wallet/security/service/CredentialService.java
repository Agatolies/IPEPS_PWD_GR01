package ipeps.pwd.wallet.security.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.security.entity.Credential;
import ipeps.pwd.wallet.security.entity.payload.SignupRequest;

public interface CredentialService {

    Credential saveCredential(Credential credential);

    Credential findCredentialByUsername(String username);

    ApiResponse signup(SignupRequest request);

}