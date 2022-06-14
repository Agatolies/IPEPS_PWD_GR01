package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, UUID> {

//    List<Wallet> findByEmployeeId(UUID employeeId);

}
