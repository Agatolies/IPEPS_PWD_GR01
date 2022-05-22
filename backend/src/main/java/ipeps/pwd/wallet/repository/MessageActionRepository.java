package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.MessageAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MessageActionRepository extends JpaRepository<MessageAction, UUID> {
}
