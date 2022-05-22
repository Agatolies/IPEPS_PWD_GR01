package ipeps.pwd.wallet.controller;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.ScheduleCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.ScheduleUpdatePayload;
import ipeps.pwd.wallet.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("schedule")
public class ScheduleController {
    @Autowired
    ScheduleService scheduleService;

    @GetMapping("list")
    public ApiResponse list(){ return scheduleService.list(); }

    @GetMapping("detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id){ return scheduleService.detail(id); }

    @PutMapping("update")
    public ApiResponse update(@RequestBody ScheduleUpdatePayload payload){ return scheduleService.update(payload); }

    @PostMapping("create")
    public ApiResponse create(@RequestBody ScheduleCreatePayload payload){ return scheduleService.create(payload); }

    @DeleteMapping("delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id){ return scheduleService.delete(id); }
}
