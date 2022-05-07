package ipeps.pwd.wallet.security.repository;

import ipeps.pwd.wallet.security.entity.Credential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CredentialRepository extends JpaRepository<Credential, Long> {
    Credential findByUsername(String username);

    boolean existsByUsername(String username);
}
