package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.AddressBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Address;
import ipeps.pwd.wallet.payload.createPayload.AddressCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.AddressUpdatePayload;
import ipeps.pwd.wallet.repository.AddressRepository;
import ipeps.pwd.wallet.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    AddressRepository addressRepository;

    @Override
    public ApiResponse list(){
        try {
            return new ApiResponse(true, addressRepository.findAll(), "api.address.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.address.list.error");
        }
    }

    @Override
    public ApiResponse detail(int id){
        try {
            Address address = addressRepository.findById(id).orElse(null);
            if(address != null){
                return new ApiResponse(true, address, "api.address.detail.success");
            } else {
                return new ApiResponse(true, null, "api.address.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.address.detail.error");
        }
    }

    @Override
    public ApiResponse update(AddressUpdatePayload payload){
        try {
            ApiResponse response = this.detail(payload.getAddress_id());
            if (response.result){
                Address address = (Address) response.data;
                addressRepository.save(address);
                return new ApiResponse(true,null, "api.address.update.success");
            }else{
                return response;
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.address.update.error");
        }
    }

    @Override
    public ApiResponse create(AddressCreatePayload payload){
        try {
            Address address = new AddressBuilder()
                    .setType(payload.getType())
                    .setRoad(payload.getRoad())
                    .setNumber(payload.getNumber())
                    .setBox(payload.getBox())
                    .setCp(payload.getCp())
                    .setTown(payload.getTown())
                    .setCountry(payload.getCountry())
                    .build();
            return new ApiResponse(true, addressRepository.save(address), "api.address.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.address.create.error");
        }
    }

    @Override
    public ApiResponse delete(int id){
        try {
            ApiResponse response = this.detail(id);
            if (response.result){
                Address address = (Address) response.data;
                addressRepository.delete(address);
                return new ApiResponse(true,null, "api.address.delete.success");
            }else{
                return new ApiResponse(true,null, "api.address.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.address.delete.error");
        }
    }
}
