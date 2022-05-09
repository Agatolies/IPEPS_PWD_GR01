package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.DocumentBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Document;
import ipeps.pwd.wallet.payload.createPayload.DocumentCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.ContactUpdatePayload;
import ipeps.pwd.wallet.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("document")
public class DocumentController {
    @Autowired
    DocumentRepository documentRepository;

    @GetMapping("list")
    public ApiResponse list(){
        try {
            return new ApiResponse(true, documentRepository.findAll(), "api.document.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.document.list.error");
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
        try {
            Document document = documentRepository.findById(id).orElse(null);
            if (document != null) {
                return new ApiResponse(true, document, "api.document.detail.success");
            } else {
                return new ApiResponse(true, null, "api.document.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.document.detail.error");
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody ContactUpdatePayload payload) {
        try{
            Document document = documentRepository.findById(payload.getContact_id()).orElse(null);
            if(document != null){
                documentRepository.save(document);
                return new ApiResponse(true,null, "api.document.update.success");
            }else{
                return new ApiResponse(true,null, "api.document.update.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.document.update.error");
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody DocumentCreatePayload payload) {
        try{
            Document document = new DocumentBuilder().setName(payload.getName()).build();
            return new ApiResponse(true, documentRepository.save(document), "api.document.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.document.create.error");
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        try{
            Document document = documentRepository.findById(id).orElse(null);
            if(document != null){
                documentRepository.delete(document);
                return new ApiResponse(true,null, "api.document.delete.success");
            }else{
                return new ApiResponse(true,null, "api.document.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.document.delete.error");
        }
    }
}
