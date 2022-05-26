package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.ContactBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Contact;
import ipeps.pwd.wallet.payload.createPayload.ContactCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.ContactUpdatePayload;
import ipeps.pwd.wallet.repository.ContactRepository;
import ipeps.pwd.wallet.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    ContactRepository contactRepository;

    @Override
    public ApiResponse list(){
        try {
            return new ApiResponse(true, contactRepository.findAll(), "api.contact.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, e.getMessage(), "api.contact.list.error");
        }
    }

    @Override
    public ApiResponse detail(UUID id){
        try {
            Contact contact = contactRepository.findById(id).orElse(null);
            if (contact != null){
                return new ApiResponse(true, contact, "api.contact.detail.success");
            } else {
                return new ApiResponse(true, null, "api.contact.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.contact.detail.error");
        }
    }

    @Override
    public ApiResponse update(ContactUpdatePayload payload){
        try {
            ApiResponse response = this.detail(payload.getContact_id());
            if (response.result){
                Contact contact = (Contact) response.data;
                contact.setFirstname(payload.getFirstname());
                contact.setLastname(payload.getLastname());
                contact.setEmail(payload.getEmail());
                contact.setPhone(payload.getPhone());
                contact.setAddresses(payload.getAddresses());
                contactRepository.save(contact);
                return new ApiResponse(true,null, "api.contact.update.success");
            }else{
                return response;
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.contact.update.error");
        }
    }

    @Override
    public ApiResponse create(ContactCreatePayload payload){
        try {
            Contact contact = new ContactBuilder()
                    .setFirstname(payload.getFirstname())
                    .setLastname(payload.getLastname())
                    .setEmail(payload.getEmail())
                    .setPhone(payload.getPhone())
                    .build();
            return new ApiResponse(true, contactRepository.save(contact), "api.contact.create.success");
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.contact.create.error");
        }
    }

    @Override
    public ApiResponse delete(UUID id){
        try {
            ApiResponse response = this.detail(id);
            if (response.result){
                Contact contact = (Contact) response.data;
                contactRepository.delete(contact);
                return new ApiResponse(true, null, "api.contact.delete.success");
            }else{
                return new ApiResponse(true,null, "api.contact.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.contact.delete.error");
        }
    }
}
