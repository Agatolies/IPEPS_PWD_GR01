package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.ContactBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Contact;
import ipeps.pwd.wallet.payload.createPayload.ContactCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.ContactUpdatePayload;
import ipeps.pwd.wallet.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("contact")
public class ContactController {
    @Autowired
    ContactRepository contactRepository;

    @GetMapping("list")
    public ApiResponse list(){
        try {
            return new ApiResponse(true, contactRepository.findAll(), "api.contact.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.contact.list.error");
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
        try {
            Contact contact = contactRepository.findById(id).orElse(null);
            if (contact != null) {
                return new ApiResponse(true, contact, "api.contact.detail.success");
            } else {
                return new ApiResponse(true, null, "api.contact.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.contact.detail.error");
        }
    }

    @PutMapping("update")
    public ApiResponse update(@RequestBody ContactUpdatePayload payload) {
        try{
            Contact contact = contactRepository.findById(payload.getContact_id()).orElse(null);
            if(contact != null){
                contactRepository.save(contact);
                return new ApiResponse(true,null, "api.contact.update.success");
            }else{
                return new ApiResponse(true,null, "api.contact.update.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.contact.update.error");
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody ContactCreatePayload payload) {
        try{
            Contact contact = new ContactBuilder().setFirstname(payload.getFirstname()).build();
            return new ApiResponse(true, contactRepository.save(contact), "api.contact.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.contact.create.error");
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        try{
            Contact contact = contactRepository.findById(id).orElse(null);
            if(contact != null){
                contactRepository.delete(contact);
                return new ApiResponse(true,null, "api.contact.delete.success");
            }else{
                return new ApiResponse(true,null, "api.contact.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.contact.delete.error");
        }
    }
}
