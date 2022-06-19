create table transaction
(
    transaction_id uuid not null
        primary key,
    amount         real not null,
    type           varchar(255),
    document_id_fk uuid
        constraint fknbkgaswogj3vtrhio2dp3ard1
            references document,
    wallet_id_fk   uuid
        constraint fkcocgssg8p9xaiexf8agxpliw0
            references wallet
);

alter table transaction
    owner to wallet;

INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('201e8474-ee78-11ec-abeb-27f7bdceb7a5', 1500, 'CREDIT', 'b5aabec9-3e40-425b-8069-8fd8e1c93bae', 'f36f5d62-7359-4d97-9826-0fe8086887d3');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('201e8578-ee78-11ec-abec-0320c000cda0', 2600, 'CREDIT', 'a2469f0f-134c-4633-b66c-7cdc69e1fbe5', 'f36f5d62-7359-4d97-9826-0fe8086887d3');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('201e85b4-ee78-11ec-abee-e766586cef6d', 2300, 'CREDIT', '7b66861f-6adc-46a0-a8d7-a46e85c5cde2', 'f36f5d62-7359-4d97-9826-0fe8086887d3');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('201e85d2-ee78-11ec-abef-07bc267baa6f', 200, 'DEBIT', 'bdea0b77-21cc-4398-93ae-1e86f284b16e', 'f36f5d62-7359-4d97-9826-0fe8086887d3');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('08c6c265-1e32-4acd-a626-7ab6189f3109', 858, 'CREDIT', '6d4b2c30-216a-4723-bad4-b2660ebcf731', 'f36f5d62-7359-4d97-9826-0fe8086887d3');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('1e5fe580-2461-4c21-a976-3067390d4803', -858, 'DEBIT', null, '54dc2c83-bfcd-4dbd-9f10-2a90ae0be7c9');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('201e8596-ee78-11ec-abed-27124eb790b8', 1750, 'CREDIT', 'd47d4da2-2daa-4e09-baca-fb630e88d88d', 'f36f5d62-7359-4d97-9826-0fe8086887d3');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('d4e6f856-1698-4f6a-9c20-a2a9e0f99554', -1000, 'DEBIT', null, '54dc2c83-bfcd-4dbd-9f10-2a90ae0be7c9');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('1e16e66e-670e-4885-bc29-a9e1131d61b3', 1000, 'CREDIT', null, 'f36f5d62-7359-4d97-9826-0fe8086887d3');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('c405d62c-0114-4415-9933-c9fa368192ef', -5000, 'DEBIT', null, '54dc2c83-bfcd-4dbd-9f10-2a90ae0be7c9');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('e2bc0f52-9475-4d23-a42b-08eb9428b80d', 5000, 'CREDIT', null, 'f36f5d62-7359-4d97-9826-0fe8086887d3');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('4ad7c37d-9460-4642-a69a-2027e8fa18ea', -5000, 'DEBIT', null, '54dc2c83-bfcd-4dbd-9f10-2a90ae0be7c9');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('b2e98bf9-3c49-4f40-8ef2-4ed5a3790ab0', 5000, 'CREDIT', null, 'f36f5d62-7359-4d97-9826-0fe8086887d3');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('c9fb72aa-ddf9-43cd-9bf4-5d99ac82f930', -10, 'DEBIT', null, '54dc2c83-bfcd-4dbd-9f10-2a90ae0be7c9');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('51c52005-bd40-49ac-b8e0-12c5b9b2f6d5', 10, 'CREDIT', null, '18c42f37-8d26-4d32-be35-3891aeb22b72');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('1bf9afe4-cbd2-4f6d-9443-87127230521c', -1.5, 'DEBIT', null, '54dc2c83-bfcd-4dbd-9f10-2a90ae0be7c9');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('5e49a38e-d0bd-4c76-8ef4-3107568f08d9', 1.5, 'CREDIT', null, '18c42f37-8d26-4d32-be35-3891aeb22b72');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('88942f98-0317-4705-9078-b932e4d0eccd', -6.66, 'DEBIT', null, '54dc2c83-bfcd-4dbd-9f10-2a90ae0be7c9');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('9cb091f3-b344-4670-b290-c2b1cbb4f5b6', 6.66, 'CREDIT', null, 'cd09a9a1-c9be-41f3-a746-1d5081ff6720');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('33d91137-3a75-43f0-9f5c-c025788c3a35', -50, 'DEBIT', null, 'f36f5d62-7359-4d97-9826-0fe8086887d3');
INSERT INTO public.transaction (transaction_id, amount, type, document_id_fk, wallet_id_fk) VALUES ('1e431a3c-a131-47f4-979e-4aac818683f5', 50, 'CREDIT', null, '18c42f37-8d26-4d32-be35-3891aeb22b72');
