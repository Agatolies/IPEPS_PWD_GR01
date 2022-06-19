create table employee
(
    employee_id        uuid    not null
        primary key,
    actif              boolean not null,
    role               varchar(255),
    account_id_fk      uuid
        constraint fkdgrf77nqi2jge7pikg4s97w3a
            references account,
    organization_id_fk uuid
        constraint fk5802mqbmf5fb3oqro0uahxyta
            references organization
);

alter table employee
    owner to wallet;

INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('fa69ee28-87b4-472a-b99b-de47a6248b9a', true, 'EMPLOYE', '81650afc-0c4d-478d-a1ec-f97678860bee', null);
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('5c50cb15-3355-4dd6-b4d5-60d687eb269c', true, 'EMPLOYE', '05d84fc6-4099-46a4-b86c-12e578222749', null);
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('1e108528-28a6-49d4-8707-86c87c1126da', true, 'EMPLOYE', 'e1b551b4-2cf5-4e48-a4d5-c59fe1357d7c', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('5ed68194-ee46-11ec-9715-07d17c310a6d', true, 'EMPLOYE', '9396a5ab-a7d7-4ee4-82d7-efe80c5fe93e', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('5ed6820c-ee46-11ec-9719-53cb1d721dce', true, 'EMPLOYE', 'd31b8ce9-b934-4044-bf19-66ef44086bff', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('5ed681ee-ee46-11ec-9718-e37f08cbdc4b', true, 'EMPLOYE', 'e19500ec-e814-49d7-ba5f-bb448765d4eb', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('5ed6822a-ee46-11ec-971a-13fb66bf0d85', true, 'EMPLOYE', '71d8ba14-fd67-4a93-841c-6691b54be1fb', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('5ed68176-ee46-11ec-9714-0b1e995204a5', true, 'EMPLOYE', '9857e11c-f9d2-40ed-b302-bd1dc827f9a2', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('5ed681d0-ee46-11ec-9717-7bc21310e506', true, 'EMPLOYE', '1a75f6f3-be54-49a9-866b-1da4edf51f5c', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('5ed681b2-ee46-11ec-9716-5fc370c91a5d', true, 'EMPLOYE', '0f886bc2-0643-47f8-8c81-02c3b9baf5d1', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('5ed68130-ee46-11ec-9712-d32dbcdae996', true, 'EMPLOYE', 'aeaafe83-0fa4-4442-9d3c-ea9bf8142d71', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('5ed6804a-ee46-11ec-9711-0fd3e61d36dd', true, 'EMPLOYE', '930eff7b-3970-46b8-bce9-f6be566813a9', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('5ed68158-ee46-11ec-9713-8b343528e349', true, 'EMPLOYE', 'ee1cf05b-012f-4e1c-8434-62619689b974', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('d0790b87-f01b-4320-a35f-fe39d22cf078', true, 'HR', 'd0790b87-f01b-4320-a35f-fe39d22cf078', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.employee (employee_id, actif, role, account_id_fk, organization_id_fk) VALUES ('796e2969-e65a-4dbc-890b-d3a5329016e6', true, 'EMPLOYE', '766e85c6-3c78-4bd7-88b9-361f91f37670', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
