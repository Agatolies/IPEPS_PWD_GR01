package ipeps.pwd.wallet.security.service;

import ipeps.pwd.wallet.security.entity.response.TokenResponse;

public interface TokenService {
    TokenResponse getRefreshToken(String refresh_token);
    TokenResponse getToken(String username, String password);
}
