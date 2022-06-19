create table messenger
(
    messenger_id uuid not null
        primary key,
    last_message varchar(255),
    people       varchar(255)
);

alter table messenger
    owner to wallet;

