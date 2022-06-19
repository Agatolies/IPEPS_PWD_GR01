create table employee_messenger
(
    messenger_id uuid not null
        constraint fkryrnx2jcv4keiysw32c94lrb0
            references messenger,
    employee_id  uuid not null
        constraint fk6pc795elw3l2jeje157giu77r
            references employee
);

alter table employee_messenger
    owner to wallet;

