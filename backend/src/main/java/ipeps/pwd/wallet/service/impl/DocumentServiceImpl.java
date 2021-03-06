package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.DocumentBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Document;
import ipeps.pwd.wallet.entity.Employee;
import ipeps.pwd.wallet.entity.Organization;
import ipeps.pwd.wallet.entity.Transaction;
import ipeps.pwd.wallet.payload.createPayload.DocumentCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.DocumentUpdatePayload;
import ipeps.pwd.wallet.repository.DocumentRepository;
import ipeps.pwd.wallet.repository.EmployeeRepository;
import ipeps.pwd.wallet.repository.OrganizationRepository;
import ipeps.pwd.wallet.repository.TransactionRepository;
import ipeps.pwd.wallet.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class DocumentServiceImpl implements DocumentService {

    @Autowired
    DocumentRepository documentRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    TransactionRepository transactionRepository;

    @Autowired
    OrganizationRepository organizationRepository;

    @Override
    public ApiResponse list(){
        try {
            return new ApiResponse(true, documentRepository.findAll(), "api.document.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.document.list.error");
        }
    }

    @Override
    public ApiResponse detail(UUID id) {
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

    @Override
    public ApiResponse update(DocumentUpdatePayload payload) {
        try{

            Document document = new DocumentBuilder()
                    .setName(payload.getName())
                    .setDescription(payload.getDescription())
                    .setFreeAccess(payload.isFreeAccess())
                    .setPath(payload.getPath())
                    .setType(payload.getType())
                    .build();

            return new ApiResponse(true, documentRepository.save(document), "api.document.create.success" );

            } catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.document.update.error");
        }
    }

    @Override
    public ApiResponse create(DocumentCreatePayload payload) {
        try{
            UUID employee_id = UUID.fromString(payload.getEmployee_id());
            UUID transaction_id = UUID.fromString(payload.getTransaction_id());
            UUID organization_id = UUID.fromString(payload.getOrganization_id());

            Employee employee = employeeRepository.findById(employee_id).orElse(null);
            Transaction transaction = transactionRepository.findById(transaction_id).orElse(null);
            Organization organization = organizationRepository.findById(organization_id).orElse(null);

            Document document = new DocumentBuilder()
                    .setName(payload.getName())
                    .setDescription(payload.getDescription())
                    .setFreeAccess(payload.isFreeAccess())
                    .setPath(payload.getPath())
                    .setType(payload.getType())
                    .setEmployee(employee)
                    .setOrganization(organization)
                    .setTransaction(transaction)
                    .build();



            return new ApiResponse(true, documentRepository.save(document), "api.document.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.document.create.error");
        }
    }

    @Override
    public ApiResponse delete(UUID id) {
        try{
            ApiResponse response = this.detail(id);
            if(response.result){
                Document document = (Document) response.data;
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
