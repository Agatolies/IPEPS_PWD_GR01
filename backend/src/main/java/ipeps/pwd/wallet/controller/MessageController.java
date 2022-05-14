package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.createPayload.MessageCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessageUpdatePayload;
import ipeps.pwd.wallet.repository.MessageRepository;
import ipeps.pwd.wallet.service.EmployeeService;
import ipeps.pwd.wallet.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("message")
public class MessageController {
    @Autowired
    MessageService messageService;

    @GetMapping("list")
    public ApiResponse list(){
        return messageService.list();
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
        return messageService.detail(id);
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody MessageUpdatePayload payload) {
        return messageService.update(payload);
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody MessageCreatePayload payload) {
        return messageService.create(payload);
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        return messageService.delete(id);
    }
}
