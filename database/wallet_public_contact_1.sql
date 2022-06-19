create table contact
(
    contact_id uuid not null
        primary key,
    email      varchar(255),
    firstname  varchar(255),
    lastname   varchar(255),
    phone      varchar(255)
);

alter table contact
    owner to wallet;

