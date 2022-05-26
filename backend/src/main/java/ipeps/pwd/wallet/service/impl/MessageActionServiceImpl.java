package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.MessageActionBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.MessageAction;
import ipeps.pwd.wallet.payload.createPayload.MessageActionCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessageActionUpdatePayload;
import ipeps.pwd.wallet.repository.MessageActionRepository;
import ipeps.pwd.wallet.service.MessageActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class MessageActionServiceImpl implements MessageActionService {

    @Autowired
    MessageActionRepository messageActionRepository;

    @Override
    public ApiResponse list() {
        try {
            return new ApiResponse(true, messageActionRepository.findAll(), "api.messageAction.list.success");
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.employee.list.error");
        }
    }

    @Override
    public ApiResponse detail(UUID id) {
        try {
            MessageAction messageAction = messageActionRepository.findById(id).orElse(null);
            if (messageAction != null) {
                return new ApiResponse(true, messageAction, "api.messageAction.detail.success");
            } else {
                return new ApiResponse(true, null, "api.messageAction.detail.not-found");
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.messageAction.detail.error");
        }
    }

    @Override
    public ApiResponse update(MessageActionUpdatePayload payload) {

        try {
            ApiResponse response = this.detail(payload.getMessageAction_id());
            if (response.result) {
                MessageAction messageAction = (MessageAction) response.data;
                messageAction.setType(payload.getType());
                messageAction.setActionDate(payload.getActionDate());
                messageAction.setMessage(payload.getMessage());
                messageAction.setEmployee(payload.getEmployee());
                messageActionRepository.save(messageAction);
                return new ApiResponse(true, null, "api.employee.update.success");
            } else {
                return response;
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.employee.update.error");
        }
    }

    @Override
    public ApiResponse create(MessageActionCreatePayload payload) {
        try {
            MessageAction messageAction = new MessageActionBuilder()
                    .setType(payload.getType())
                    .setActionDate(payload.getActionDate())
                    .build();

            return new ApiResponse(true, messageActionRepository.save(messageAction), "api.messageAction.create.success");
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.messageAction.create.error");
        }
    }

    @Override
    public ApiResponse delete(UUID id) {
        try {
            ApiResponse response = this.detail(id);
            if (response.result) {
                MessageAction messageAction = (MessageAction) response.data;
                messageActionRepository.delete(messageAction);
                return new ApiResponse(true, null, "api.messageAction.delete.success");
            } else {
                return new ApiResponse(true, null, "api.messageAction.delete.detail-not-found");
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.messageAction.delete.error");
        }
    }
}
