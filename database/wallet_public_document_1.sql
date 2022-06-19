create table document
(
    document_id        uuid    not null
        primary key,
    description        varchar(255),
    free_access        boolean not null,
    name               varchar(255),
    path               varchar(255),
    type               varchar(255),
    employee_id_fk     uuid
        constraint fk31ak7pqypcp5r9kavnfy67qyf
            references employee,
    organization_id_fk uuid
        constraint fki72bxekht57mggoijwyn4jdj5
            references organization,
    transaction_id_fk  uuid
        constraint fkmkvr5myy0fuksvbl75502hp3f
            references transaction
);

alter table document
    owner to wallet;

INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('a42160b6-e4a8-499a-a9ae-8f3093758fff', 'description a completer', true, 'documentation de tous', 'le bon chemin', 'code angular', null, null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('bbe1179e-0700-4d02-ac04-bb8d7da51911', 'reyrezyr', true, 'poiureoiur', 'oieureoiur', 'FACTURE', '5ed681ee-ee46-11ec-9718-e37f08cbdc4b', 'abb2b2da-ee46-11ec-8454-9f1786023e2d', null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('b5aabec9-3e40-425b-8069-8fd8e1c93bae', 'Note de credit intermediaire', true, 'Doc4', 'Note credit doc4', 'NOTE DE CREDIT', 'd0790b87-f01b-4320-a35f-fe39d22cf078', null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('2cc20d9a-623a-442c-a4cd-e147737dd60b', 'Note de debit finale', true, 'Doc8', 'Note debit doc8', 'NOTE DE DEBIT', '5ed68130-ee46-11ec-9712-d32dbcdae996', null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('bdea0b77-21cc-4398-93ae-1e86f284b16e', 'Facture intermediaire', true, 'Doc2', 'facture doc2', 'Facture', 'd0790b87-f01b-4320-a35f-fe39d22cf078', null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('012f7454-ce6e-4d99-a83a-d45f994cb087', 'Note de debit intermediaire', true, 'Doc9', 'Note debit doc9', 'NOTE DE DEBIT', '5ed68130-ee46-11ec-9712-d32dbcdae996', null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('6d4b2c30-216a-4723-bad4-b2660ebcf731', 'Note de credit intermediaire', true, 'Doc6', 'Note credit doc6', 'NOTE DE CREDIT', 'd0790b87-f01b-4320-a35f-fe39d22cf078', null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('a2469f0f-134c-4633-b66c-7cdc69e1fbe5', 'Note de credit intermediaire', true, 'Doc5', 'Note credit doc5', 'NOTE DE CREDIT', 'd0790b87-f01b-4320-a35f-fe39d22cf078', null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('bff5d976-a6bb-4306-9dc9-2bdac80cfde0', 'Facture finale', true, 'Doc1', 'facture doc1', 'Facture', 'd0790b87-f01b-4320-a35f-fe39d22cf078', null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('4854a70f-8796-4b59-aa27-1ea956c196fc', 'Facture intermediaire', true, 'Doc3', 'facture doc3', 'Facture', 'd0790b87-f01b-4320-a35f-fe39d22cf078', null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('7b66861f-6adc-46a0-a8d7-a46e85c5cde2', 'Note de credit finale', true, 'Doc7', 'Note credit doc7', 'NOTE DE CREDIT', 'd0790b87-f01b-4320-a35f-fe39d22cf078', null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('e06f9bb3-bf7b-43a3-ae77-b9c601d1a6f4', 'description a completer', true, 'documentation de tous', 'le bon chemin', 'code angular', 'd0790b87-f01b-4320-a35f-fe39d22cf078', null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('d47d4da2-2daa-4e09-baca-fb630e88d88d', 'Note de debit intermediaire', true, 'Doc10', 'Note debit doc10', 'NOTE DE DEBIT', '5ed68130-ee46-11ec-9712-d32dbcdae996', null, null);
INSERT INTO public.document (document_id, description, free_access, name, path, type, employee_id_fk, organization_id_fk, transaction_id_fk) VALUES ('b426c30f-4330-4901-ba72-1563b95b1b3a', 'description a completer', true, 'documentation de tous', 'le bon chemin', 'code angular', '5ed68176-ee46-11ec-9714-0b1e995204a5', 'abb2b438-ee46-11ec-8456-07023bb54550', null);
