package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.DocumentCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.DocumentUpdatePayload;
import ipeps.pwd.wallet.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("document")
public class DocumentController {
    @Autowired
    DocumentService documentService;

    @GetMapping("list")
    public ApiResponse list(){ return documentService.list(); }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){ return documentService.detail(id); }

    @PutMapping("update")
    public ApiResponse update(@RequestBody DocumentUpdatePayload payload){ return documentService.update(payload); }

    @PostMapping("create")
    public ApiResponse create(@RequestBody DocumentCreatePayload payload){ return documentService.create(payload); }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id){ return documentService.delete(id); }
}
