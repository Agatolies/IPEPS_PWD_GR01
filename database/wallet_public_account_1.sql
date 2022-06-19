create table account
(
    account_id uuid not null
        primary key,
    firstname  varchar(255),
    lastname   varchar(255)
);

alter table account
    owner to wallet;

INSERT INTO public.account (account_id, firstname, lastname) VALUES ('d0790b87-f01b-4320-a35f-fe39d22cf078', 'Laure', 'D''Este');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('766e85c6-3c78-4bd7-88b9-361f91f37670', 'Pascal', 'Douyez');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('fbdd1672-0c9d-420c-bd70-2195cac90ea4', 'Anne', 'Eke');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('3171ea4d-39cb-4fec-8949-f98211a067d9', 'peach', 'OUnette');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('e1b551b4-2cf5-4e48-a4d5-c59fe1357d7c', 'Bavette', 'OUnette');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('930eff7b-3970-46b8-bce9-f6be566813a9', 'Kaylin', 'Huels');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('aeaafe83-0fa4-4442-9d3c-ea9bf8142d71', 'Rubye', 'McKenzie');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('ee1cf05b-012f-4e1c-8434-62619689b974', 'Trudie', 'Nitzsche');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('9857e11c-f9d2-40ed-b302-bd1dc827f9a2', 'Isabella', 'Torphy');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('9396a5ab-a7d7-4ee4-82d7-efe80c5fe93e', 'Bernadette', 'Wuckert');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('0f886bc2-0643-47f8-8c81-02c3b9baf5d1', 'Bryce', 'Bauch');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('1a75f6f3-be54-49a9-866b-1da4edf51f5c', 'Armand', 'Nikolaus');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('e19500ec-e814-49d7-ba5f-bb448765d4eb', 'Agnes', 'Kuhic');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('d31b8ce9-b934-4044-bf19-66ef44086bff', 'Drew', 'Cole');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('71d8ba14-fd67-4a93-841c-6691b54be1fb', 'Toney', 'Dooley');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('81650afc-0c4d-478d-a1ec-f97678860bee', 'Merlin', 'OUnette');
INSERT INTO public.account (account_id, firstname, lastname) VALUES ('05d84fc6-4099-46a4-b86c-12e578222749', 'Choupette', 'LeLapin');
