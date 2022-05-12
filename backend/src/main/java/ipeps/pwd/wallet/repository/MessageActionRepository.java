package ipeps.pwd.wallet.repository;

import ipeps.pwd.wallet.entity.MessageAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageActionRepository extends JpaRepository<MessageAction, Integer> {
    static void save(ipeps.pwd.wallet.service.MessageAction messageAction) {
    }
}
