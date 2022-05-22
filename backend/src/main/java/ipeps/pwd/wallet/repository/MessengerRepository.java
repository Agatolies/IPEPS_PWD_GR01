package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.Messenger;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MessengerRepository extends JpaRepository<Messenger, UUID> {
}
