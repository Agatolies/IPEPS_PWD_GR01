create table message_action
(
    message_action_id uuid not null
        primary key,
    action_date       timestamp,
    type              varchar(255),
    employee_id_fk    uuid
        constraint fk3jqthy2u4sjfv1v298yv6qfdr
            references employee,
    message_id_fk     uuid
        constraint fk7anl3dbv10oob1hbogfshnbe
            references message
);

alter table message_action
    owner to wallet;

