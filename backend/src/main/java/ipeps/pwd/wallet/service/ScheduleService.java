package ipeps.pwd.wallet.service;

import ipeps.pwd.wallet.common.entity.response.ApiResponse;
import ipeps.pwd.wallet.payload.createPayload.ScheduleCreatePayload;
import ipeps.pwd.wallet.payload.updatePayload.ScheduleUpdatePayload;

public interface ScheduleService {
    ApiResponse list();
    ApiResponse detail(int id);
    ApiResponse update(ScheduleUpdatePayload payload);
    ApiResponse create(ScheduleCreatePayload payload);
    ApiResponse delete(int id);
}
