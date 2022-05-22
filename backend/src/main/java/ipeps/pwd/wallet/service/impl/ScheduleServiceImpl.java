package ipeps.pwd.wallet.service.impl;

import ipeps.pwd.wallet.builder.ScheduleBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Schedule;
import ipeps.pwd.wallet.payload.createPayload.ScheduleCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.ScheduleUpdatePayload;
import ipeps.pwd.wallet.repository.ScheduleRepository;
import ipeps.pwd.wallet.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    ScheduleRepository scheduleRepository;

    @Override
    public ApiResponse list(){
        try {
            return new ApiResponse(true, scheduleRepository.findAll(), "api.schedule.list.success");
        } catch (Exception e) {
            return new ApiResponse(false, null, "api.schedule.list.error");
        }
    }

    @Override
    public ApiResponse detail(int id) {
        try {
            Schedule schedule = scheduleRepository.findById(id).orElse(null);
            if (schedule != null) {
                return new ApiResponse(true, schedule, "api.schedule.detail.success");
            } else {
                return new ApiResponse(true, null, "api.schedule.detail.not-found");
            }
        } catch (Exception e){
            return new ApiResponse(false, e.getMessage(), "api.schedule.detail.error");
        }
    }

    @Override
    public ApiResponse update(ScheduleUpdatePayload payload) {
        try{
            ApiResponse response = this.delete(payload.getSchedule_id());
            if(response.result){
                Schedule schedule = (Schedule) response.data;
                scheduleRepository.save(schedule);
                return new ApiResponse(true,null, "api.schedule.update.success");
            }else{
                return response;
            }
        } catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.schedule.update.error");
        }
    }

    @Override
    public ApiResponse create(ScheduleCreatePayload payload) {
        try{
            Schedule schedule = new ScheduleBuilder()
                    .setType(payload.getType())
                    .setDateSchedule(payload.getDateSchedule())
                    .setComment(payload.getComment())
                    .build();
            return new ApiResponse(true, scheduleRepository.save(schedule), "api.schedule.create.success");
        } catch(Exception e){
            return new ApiResponse(false, null, "api.schedule.create.error");
        }
    }

    @Override
    public ApiResponse delete(int id) {
        try{
            ApiResponse response = this.delete(id);
            if(response.result){
                Schedule schedule = (Schedule) response.data;
                scheduleRepository.delete(schedule);
                return new ApiResponse(true,null, "api.schedule.delete.success");
            } else{
                return new ApiResponse(true,null, "api.schedule.delete.detail-not-found");
            }
        } catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.schedule.delete.error");
        }
    }
}
