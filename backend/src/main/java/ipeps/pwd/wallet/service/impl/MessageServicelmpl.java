package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.MessageBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Message;
import ipeps.pwd.wallet.payload.createPayload.MessageCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessageUpdatePayload;
import ipeps.pwd.wallet.repository.MessageRepository;
import ipeps.pwd.wallet.repository.messageRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class MessageServicelmpl {
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
    public ApiResponse detail(int id) {
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
                Message Message = (Message) response.data;
                messageRepository.save(Message);
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
            Message Message = new MessageBuilder().setRole(payload.getRole()).build();
            return new ApiResponse(true, messageRepository.save(Message), "api.Message.create.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.message.create.error");
        }
    }


    @Override
    public ApiResponse delete(int id) {
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
