package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.DocumentCreatePayload;
import ipeps.pwd.wallet.payload.createPayload.MessageActionCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.DocumentUpdatePayload;
import ipeps.pwd.wallet.payload.updatePayload.MessageActionUpdatePayload;
import ipeps.pwd.wallet.service.MessageActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("messageAction")
public class MessageActionController {
    @Autowired
    MessageActionService messageActionService;

    @GetMapping("list")
    public ApiResponse list(){ return messageActionService.list(); }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id){ return messageActionService.detail(id); }

    @PutMapping("update")
    public ApiResponse update(@RequestBody MessageActionUpdatePayload payload){ return messageActionService.update(payload); }

    @PostMapping("create")
    public ApiResponse create(@RequestBody MessageActionCreatePayload payload){ return messageActionService.create(payload); }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id){ return messageActionService.delete(id); }


}
