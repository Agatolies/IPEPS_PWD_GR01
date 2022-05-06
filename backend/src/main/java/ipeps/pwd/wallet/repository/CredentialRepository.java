package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.Credential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CredentialRepository extends JpaRepository<Credential, Integer> {
}
