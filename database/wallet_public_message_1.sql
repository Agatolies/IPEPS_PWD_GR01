create table message
(
    message_id      uuid    not null
        primary key,
    date            timestamp,
    is_read         boolean not null,
    message         varchar(255),
    employee_id_fk  uuid
        constraint fkddpcjgnsa50g45ec4gvt1bqi8
            references employee,
    messenger_id_fk uuid
        constraint fk7bvsk0xev8gcmar3g3cvee7kv
            references messenger
);

alter table message
    owner to wallet;

