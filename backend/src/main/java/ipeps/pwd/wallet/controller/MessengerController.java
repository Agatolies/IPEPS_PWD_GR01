package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.EmployeeCreatePayload;
import ipeps.pwd.wallet.payload.createPayload.MessengerCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.EmployeeUpdatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessengerUpdatePayload;
import ipeps.pwd.wallet.repository.MessengerRepository;
import ipeps.pwd.wallet.service.MessengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("messenger")
public class MessengerController {
    @Autowired
    MessengerService messengerService;
    
    @GetMapping("list")
    public ApiResponse list(){
        return messengerService.list();
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
        return messengerService.detail(id);
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody MessengerUpdatePayload payload) {
        return messengerService.update(payload);
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody MessengerCreatePayload payload) {
        return messengerService.create(payload);
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        return messengerService.delete(id);
    }
}

