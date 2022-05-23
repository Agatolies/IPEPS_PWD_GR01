package ipeps.pwd.wallet.security.repository;

import ipeps.pwd.wallet.security.entity.Credential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CredentialRepository extends JpaRepository<Credential, UUID> {
    Credential findByUsername(String username);

    boolean existsByUsername(String username);
}
