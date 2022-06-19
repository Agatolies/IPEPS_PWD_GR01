create table address
(
    address_id         uuid not null
        primary key,
    box                varchar(255),
    country            varchar(255),
    cp                 varchar(255),
    number             varchar(255),
    road               varchar(255),
    town               varchar(255),
    type               varchar(255),
    contact_id_fk      uuid
        constraint fk7j99x5fob635hncrwpuhmpwgv
            references contact,
    employee_id_fk     uuid
        constraint fk6eocjelq0v9v6jbk7eg2o4ebc
            references employee,
    organization_id_fk uuid
        constraint fkrg554byst9qhfekosw4p6dsqk
            references organization
);

alter table address
    owner to wallet;

