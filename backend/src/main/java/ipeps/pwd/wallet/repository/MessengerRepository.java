package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.Messenger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessengerRepository extends JpaRepository<Messenger, Integer> {
}
