package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.MessengerBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Messenger;
import ipeps.pwd.wallet.payload.createPayload.MessengerCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessengerUpdatePayload;
import ipeps.pwd.wallet.repository.MessengerRepository;
import ipeps.pwd.wallet.service.MessengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class MessengerServicelmpl implements MessengerService {

    @Autowired
    MessengerRepository messengerRepository;

    @Override
    public ApiResponse list() {
        try {
            return new ApiResponse(true, messengerRepository.findAll(), "api.messenger.list.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.messenger.list.error");
        }
    }

    @Override
    public ApiResponse detail(UUID id) {
        try {
            Messenger messenger = messengerRepository.findById(id).orElse(null);
            if (messenger != null) {
                return new ApiResponse(true, messenger, "api.messenger.detail.success");
            } else {
                return new ApiResponse(true, null, "api.messenger.detail.not-found");
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.messenger.detail.error");
        }
    }

    @Override
    public ApiResponse update(MessengerUpdatePayload payload) {
        try {
            ApiResponse response = this.detail(payload.getMessenger_id());
            if (response.result) {
                Messenger messenger = (Messenger) response.data;
                messenger.setLastMessage(payload.getLastMessage());
                messenger.setPeople(payload.getPeople());
                messenger.setEmployees(payload.getEmployees());
                messengerRepository.save(messenger);
                return new ApiResponse(true, null, "api.messenger.update.success");
            } else {
                return response;
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.messenger.update.error");
        }
    }

    @Override
    public ApiResponse create(MessengerCreatePayload payload) {
        try {

            Messenger messenger = new MessengerBuilder()
                    .setLastMessage(payload.getLastMessage())
                    .setPeople(payload.getPeople())
                    .build();
            return new ApiResponse(true, messengerRepository.save(messenger), "api.messenger.create.success");

        } catch (Exception e) {
            return new ApiResponse(false, null, "api.messenger.create.error");
        }
    }

    @Override
    public ApiResponse delete(UUID id) {
        try {
            ApiResponse response = this.detail(id);
            if (response.result) {
                Messenger messenger = (Messenger) response.data;
                messengerRepository.delete(messenger);
                return new ApiResponse(true, null, "api.messenger.delete.success");
            } else {
                return new ApiResponse(true, null, "api.messenger.delete.detail-not-found");
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.messenger.delete.error");
        }
    }
    
}
