package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.builder.ScheduleBuilder;
import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.entity.Schedule;
import ipeps.pwd.wallet.payload.createPayload.ScheduleCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.ScheduleUpdatePayload;
import ipeps.pwd.wallet.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("schedule")
public class ScheduleController {
    @Autowired
    ScheduleRepository scheduleRepository;

    @GetMapping("list")
    public ApiResponse list(){
        try {
            return new ApiResponse(true, scheduleRepository.findAll(), "api.schedule.list.success");
        }
        catch (Exception e) {
            return new ApiResponse(false, null, "api.schedule.list.error");
        }
    }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") int id) {
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

    @PutMapping("update")
    public ApiResponse update(@RequestBody ScheduleUpdatePayload payload) {
        try{
            Schedule schedule = scheduleRepository.findById(payload.getSchedule_id()).orElse(null);
            if(schedule != null){
                scheduleRepository.save(schedule);
                return new ApiResponse(true,null, "api.schedule.update.success");
            }else{
                return new ApiResponse(true,null, "api.schedule.update.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.schedule.update.error");
        }
    }

    @PostMapping("create")
    public ApiResponse create(@RequestBody ScheduleCreatePayload payload) {
        try{
            Schedule schedule = new ScheduleBuilder().setType(payload.getType()).build();
            return new ApiResponse(true, scheduleRepository.save(schedule), "api.schedule.create.success");
        }catch(Exception e){
            return new ApiResponse(false, null, "api.schedule.create.error");
        }
    }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") int id) {
        try{
            Schedule schedule = scheduleRepository.findById(id).orElse(null);
            if(schedule != null){
                scheduleRepository.delete(schedule);
                return new ApiResponse(true,null, "api.schedule.delete.success");
            }else{
                return new ApiResponse(true,null, "api.schedule.delete.detail-not-found");
            }
        }catch(Exception e){
            return new ApiResponse(false, e.getMessage(), "api.schedule.delete.error");
        }
    }
}
