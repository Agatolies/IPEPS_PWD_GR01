create table wallet
(
    wallet_id          uuid    not null
        primary key,
    actif              boolean not null,
    description        varchar(255),
    name               varchar(255),
    type               varchar(255),
    employee_id_fk     uuid
        constraint fkgehg9pkg0asgsyiv7eq12itd
            references employee,
    organization_id_fk uuid
        constraint fkgvrel51xnneiosgp0dxcbt6os
            references organization
);

alter table wallet
    owner to wallet;

INSERT INTO public.wallet (wallet_id, actif, description, name, type, employee_id_fk, organization_id_fk) VALUES ('99766436-a2be-402c-a946-1577e295abb7', false, 'RTET', 'Wallet 2', 'Type 1', 'd0790b87-f01b-4320-a35f-fe39d22cf078', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.wallet (wallet_id, actif, description, name, type, employee_id_fk, organization_id_fk) VALUES ('dc262359-52ae-4550-aa02-1ef6c081b5c5', true, 'testons', 'Wallet 5', 'Type 2', 'd0790b87-f01b-4320-a35f-fe39d22cf078', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.wallet (wallet_id, actif, description, name, type, employee_id_fk, organization_id_fk) VALUES ('4d42a898-260a-4319-8266-782ba2298d16', true, 'teste', 'Wallet 6', 'Type 3', 'd0790b87-f01b-4320-a35f-fe39d22cf078', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.wallet (wallet_id, actif, description, name, type, employee_id_fk, organization_id_fk) VALUES ('9289a7f2-a982-4e59-be97-134e76780db4', true, 'azerty', 'Alacon', 'Type 1', 'd0790b87-f01b-4320-a35f-fe39d22cf078', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.wallet (wallet_id, actif, description, name, type, employee_id_fk, organization_id_fk) VALUES ('18c42f37-8d26-4d32-be35-3891aeb22b72', true, 'Lorem Ipsum', 'Mes économies', 'Type 1', '796e2969-e65a-4dbc-890b-d3a5329016e6', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.wallet (wallet_id, actif, description, name, type, employee_id_fk, organization_id_fk) VALUES ('f36f5d62-7359-4d97-9826-0fe8086887d3', true, 'test', 'Portefeuille Employé', 'Type 1', 'd0790b87-f01b-4320-a35f-fe39d22cf078', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.wallet (wallet_id, actif, description, name, type, employee_id_fk, organization_id_fk) VALUES ('cd09a9a1-c9be-41f3-a746-1d5081ff6720', true, 'Un wallet de type 3', 'Wallet de Pascal', 'Type 3', '796e2969-e65a-4dbc-890b-d3a5329016e6', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.wallet (wallet_id, actif, description, name, type, employee_id_fk, organization_id_fk) VALUES ('54dc2c83-bfcd-4dbd-9f10-2a90ae0be7c9', false, 'test', 'Wallet 3', 'Type 1', 'd0790b87-f01b-4320-a35f-fe39d22cf078', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.wallet (wallet_id, actif, description, name, type, employee_id_fk, organization_id_fk) VALUES ('b0012601-1d51-4264-a6dd-621576760f1c', false, 'Test', 'Wallet9', 'Type 2', 'd0790b87-f01b-4320-a35f-fe39d22cf078', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.wallet (wallet_id, actif, description, name, type, employee_id_fk, organization_id_fk) VALUES ('7b88219e-3b2b-42ed-9f97-c55e2480f1c1', false, null, null, null, 'd0790b87-f01b-4320-a35f-fe39d22cf078', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
INSERT INTO public.wallet (wallet_id, actif, description, name, type, employee_id_fk, organization_id_fk) VALUES ('3f635c76-8830-41b3-a27f-0021e1fecc3b', false, 'Un portefeuille de type 3', 'Wallet 9', 'Type 3', 'd0790b87-f01b-4320-a35f-fe39d22cf078', 'abb2b2da-ee46-11ec-8454-9f1786023e2d');
