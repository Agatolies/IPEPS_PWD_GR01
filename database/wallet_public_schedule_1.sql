create table schedule
(
    schedule_id    uuid not null
        primary key,
    comment        varchar(255),
    date_schedule  timestamp,
    type           varchar(255),
    employee_id_fk uuid
        constraint fk1d6rut3wx4otd37v1tbb8v9fv
            references employee
);

alter table schedule
    owner to wallet;

