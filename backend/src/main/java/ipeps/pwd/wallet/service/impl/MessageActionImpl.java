package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.EmployeeBuilder;
import ipeps.pwd.wallet.builder.MessageActionBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.createPayload.MessageActionCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessageActionUpdatePayload;
import ipeps.pwd.wallet.repository.EmployeRepository;
import ipeps.pwd.wallet.repository.MessageActionRepository;
import ipeps.pwd.wallet.service.MessageAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageActionImpl implements MessageAction{

    @Autowired
    MessageActionRepository messageActionRepository;

    @Override
    public ApiResponse list() {
        try {
            return new ApiResponse(true, messageActionRepository.findAll(), "api.messageAction.list.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.employee.list.error");
        }
    }


    @Override
    public ApiResponse detail(int id) {
        try {
            MessageAction messageAction = (MessageAction) messageActionRepository.findById(id).orElse(null);
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
                MessageActionRepository.save(messageAction);
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
            MessageAction messageAction = new MessageActionBuilder(payload.getRole()).build();
            return new ApiResponse(true, messageActionRepository.save(m), "api.messageAction.create.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.messageAction.create.error");
        }
    }

    @Override
    public ApiResponse update(MessageActionUpdatePayload payload) {

        try {
            ApiResponse response = this.detail(payload.getMessageAction_id());
            if (response.result) {
                Employee employee = (Employee) response.data;
                messageActionRepository.save(messageAction);
                return new ApiResponse(true, null, "api.messageAction.update.success");
            } else {
                return response;
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.messageAction.update.error");
        }
    }

    @Override
    public ApiResponse create(EmployeeCreatePayload payload) {
        try {
            Employee employee = new EmployeeBuilder().setRole(payload.getRole()).build();
            return new ApiResponse(true, employeRepository.save(employee), "api.messageAction.create.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.messageAction.create.error");
        }
    }


    @Override
    public ApiResponse delete(int id) {
        try {
            ApiResponse response = this.detail(id);
            if (response.result) {
                Employee employee = (Employee) response.data;
                employeRepository.delete(employee);
                return new ApiResponse(true, null, "api.messageAction.delete.success");
            } else {
                return new ApiResponse(true, null, "api.messageAction.delete.detail-not-found");
            }
        } catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.messageAction.delete.error");
        }
    }
}
