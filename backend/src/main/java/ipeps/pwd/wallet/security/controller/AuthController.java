package ipeps.pwd.wallet.security.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.security.entity.payload.RefreshTokenRequest;
import ipeps.pwd.wallet.security.entity.payload.SigninRequest;
import ipeps.pwd.wallet.security.entity.payload.SignupRequest;
import ipeps.pwd.wallet.security.repository.CredentialRepository;
import ipeps.pwd.wallet.security.service.CredentialService;
import ipeps.pwd.wallet.security.service.TokenService;
import ipeps.pwd.wallet.security.entity.Credential;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;

@CrossOrigin(origins = "*", maxAge = 3600)
@EnableResourceServer
@RestController
@RequestMapping("/account")
public class AuthController {
    @Autowired
    CredentialService credentialService;
    @Autowired
    TokenService tokenService;
    @Autowired
    CredentialRepository credentialRepository;
    @Autowired
    PasswordEncoder encoder;

    @GetMapping("/me")
    public ApiResponse get(final Principal principal) {
        return new ApiResponse(true, credentialRepository.findByUsername(principal.getName()), null);
    }

    @PostMapping("/signin")
    public ApiResponse signin(@RequestBody SigninRequest request) {
        ApiResponse result = request.isValid();

        if (result.isSuccess()) {
            Credential credential = credentialRepository.findByUsername(request.getUsername());

            if (credential != null && encoder.matches(request.getPassword(), credential.getPassword())) {
                HashMap<String, Object> hmap = new HashMap<String, Object>();
                hmap.put("user", credential);
                hmap.put("account", credential.getAccount());
                hmap.put("token", this.tokenService.getToken(request.getUsername(), request.getPassword()));

                return new ApiResponse(true, hmap, null);
            } else {
                return new ApiResponse(false, null, "api.signin.bad-credentials");
            }
        } else {
            return result;
        }
    }

    @PostMapping("/refresh")
    public ApiResponse refresh(@RequestBody RefreshTokenRequest refresh) {
        try {
            return new ApiResponse(true, tokenService.getRefreshToken(refresh.getRefresh()), null);
        } catch (Exception e) {
            return new ApiResponse(false, null, e.getMessage());
        }
    }

    @PostMapping("/signup")
    public ApiResponse signup(@RequestBody SignupRequest request) {
        return credentialService.signup(request);
    }

}
