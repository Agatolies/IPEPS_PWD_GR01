package ipeps.pwd.wallet.security.service;

import ipeps.pwd.wallet.builder.AccountBuilder;
import ipeps.pwd.wallet.builder.EmployeeBuilder;
import ipeps.pwd.wallet.builder.OrganizationBuilder;
import ipeps.pwd.wallet.builder.WalletBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.repository.EmployeeRepository;
import ipeps.pwd.wallet.repository.OrganizationRepository;
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
    OrganizationRepository organizationRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    PasswordEncoder encoder;

    @Override
    public Credential saveCredential(Credential credential) {
        return credentialRepository.saveAndFlush(credential);
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
                    // Organisation par defaut
                    String organizationName = "Papa's Travel Liège";
                    String organizationDescription = "Siège social";

//                    this.organizationRepository.getById();

                    Organization organization = new OrganizationBuilder()
                            .setName(organizationName)
                            .setDescription(organizationDescription)
                            .setActif(true)
                            .build();

                    Credential credential = new Credential.Builder()
                            .setUsername(request.getUsername())
                            .setPassword(encoder.encode(request.getPassword()))
                            .setActif(true)
                            .build();

                    credential = this.saveCredential(credential);

                    Account account = new AccountBuilder()
                            .setId(credential.getCredential_id())
                            .setFirstname(request.getFirstname())
                            .setLastname(request.getLastname())
                            .build();

                    account = this.saveAccount(account);

                    Employee employee = new EmployeeBuilder()
                            .setActif(true)
                            .setAccount(account)
                            .setRole("EMPLOYE")
                            .build();

                    employee = this.employeeRepository.save(employee);

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
