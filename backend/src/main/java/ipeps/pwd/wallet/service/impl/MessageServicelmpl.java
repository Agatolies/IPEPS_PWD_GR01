package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.MessageBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Message;
import ipeps.pwd.wallet.payload.createPayload.MessageCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessageUpdatePayload;
import ipeps.pwd.wallet.repository.MessageRepository;
import ipeps.pwd.wallet.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class MessageServicelmpl implements MessageService {

    @Autowired
    MessageRepository messageRepository;

    @Override
    public ApiResponse list() {
        try {
            return new ApiResponse(true, messageRepository.findAll(), "api.Message.list.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.Message.list.error");
        }
    }

    @Override
    public ApiResponse detail(UUID id) {
        try {
            Message message = messageRepository.findById(id).orElse(null);
            if (message != null) {
                return new ApiResponse(true, message, "api.message.detail.success");
            } else {
                return new ApiResponse(true, null, "api.message.detail.not-found");
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.message.detail.error");
        }
    }

    @Override
    public ApiResponse update(MessageUpdatePayload payload) {

        try {
            ApiResponse response = this.detail(payload.getMessage_id());
            if (response.result) {
                Message message = (Message) response.data;
                //message.setIsRead(payload.getIsRead());
                message.setMessage(payload.getMessage());
                message.setMessenger(payload.getMessenger());
                message.setDate(payload.getDate());
                message.setEmployee(payload.getEmployee());
                messageRepository.save(message);
                return new ApiResponse(true, null, "api.message.update.success");
            } else {
                return response;
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.message.update.error");
        }
    }

    @Override
    public ApiResponse create(MessageCreatePayload payload) {
        try {
            Message message = new MessageBuilder()
                    .setIsRead(payload.isRead())
                    .setMessage(payload.getMessage())
                    .setDate(payload.getDate())
                    .setEmployee(payload.getEmployee())
                    .build();

            return new ApiResponse(true, messageRepository.save(message), "api.Message.create.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.message.create.error");
        }
    }


    @Override
    public ApiResponse delete(UUID id) {
        try {
            ApiResponse response = this.detail(id);
            if (response.result) {
                Message Message = (Message) response.data;
                messageRepository.delete(Message);
                return new ApiResponse(true, null, "api.message.delete.success");
            } else {
                return new ApiResponse(true, null, "api.message.delete.detail-not-found");
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.message.delete.error");
        }
    }
}
