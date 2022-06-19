create table salary
(
    salary_id      uuid    not null
        primary key,
    amount         real    not null,
    billing_date   timestamp,
    periodicity    integer not null,
    type           varchar(255),
    employee_id_fk uuid
        constraint fk2dyrieyheryjhdi7klmkwvqxs
            references employee
);

alter table salary
    owner to wallet;

INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('3b415406-ee47-11ec-99e4-37eb0c7d873b', 2000, '2022-06-30 00:00:00.000000', 12, 'SALAIRE_BASE', '5ed6804a-ee46-11ec-9711-0fd3e61d36dd');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('3b41533e-ee47-11ec-99de-87be6303a00c', 2000, '2022-06-30 00:00:00.000000', 12, 'SALAIRE_BASE', '5ed681ee-ee46-11ec-9718-e37f08cbdc4b');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('3b41542e-ee47-11ec-99e5-9b526d617726', 2000, '2022-06-30 00:00:00.000000', 12, 'SALAIRE_BASE', '5ed68158-ee46-11ec-9713-8b343528e349');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('3b41535c-ee47-11ec-99df-0ba282606fa7', 2000, '2022-06-30 00:00:00.000000', 12, 'SALAIRE_BASE', '5ed6822a-ee46-11ec-971a-13fb66bf0d85');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('3b4153ca-ee47-11ec-99e2-e3d7877fc2e6', 2000, '2022-06-30 00:00:00.000000', 12, 'SALAIRE_BASE', '5ed681b2-ee46-11ec-9716-5fc370c91a5d');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('3b4153a2-ee47-11ec-99e1-e3d680acb98d', 2000, '2022-06-30 00:00:00.000000', 12, 'SALAIRE_BASE', '5ed681d0-ee46-11ec-9717-7bc21310e506');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('3b4151c2-ee47-11ec-99db-9fa407fe810f', 2000, '2022-06-30 00:00:00.000000', 12, 'SALAIRE_BASE', '1e108528-28a6-49d4-8707-86c87c1126da');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('3b4153e8-ee47-11ec-99e3-3bdce9a77e43', 2000, '2022-06-30 00:00:00.000000', 12, 'SALAIRE_BASE', '5ed68130-ee46-11ec-9712-d32dbcdae996');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('3b415384-ee47-11ec-99e0-afc37eeb49c6', 2000, '2022-06-30 00:00:00.000000', 12, 'SALAIRE_BASE', '5ed68176-ee46-11ec-9714-0b1e995204a5');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('3b415316-ee47-11ec-99dd-e36966ea882f', 2000, '2022-06-30 00:00:00.000000', 12, 'SALAIRE_BASE', '5ed6820c-ee46-11ec-9719-53cb1d721dce');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('3b4152ee-ee47-11ec-99dc-6750a44cfa56', 2000, '2022-06-30 00:00:00.000000', 12, 'SALAIRE_BASE', '5ed68194-ee46-11ec-9715-07d17c310a6d');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('55a9fff0-ee47-11ec-bc81-eff94f9a66c5', 1000, '2022-06-30 00:00:00.000000', 1, 'CONGE_PAYE', '5ed68194-ee46-11ec-9715-07d17c310a6d');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('55a9ff96-ee47-11ec-bc7e-878da823697d', 1000, '2022-06-30 00:00:00.000000', 1, 'CONGE_PAYE', '5ed68130-ee46-11ec-9712-d32dbcdae996');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('55a9ffd2-ee47-11ec-bc80-935b1fb06461', 1000, '2022-06-30 00:00:00.000000', 1, 'CONGE_PAYE', '5ed6820c-ee46-11ec-9719-53cb1d721dce');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('55a9ff78-ee47-11ec-bc7d-d7df8fab58c0', 1000, '2022-06-30 00:00:00.000000', 1, 'CONGE_PAYE', '1e108528-28a6-49d4-8707-86c87c1126da');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('55a9ffb4-ee47-11ec-bc7f-53351ffd253a', 1000, '2022-06-30 00:00:00.000000', 1, 'CONGE_PAYE', '5ed68176-ee46-11ec-9714-0b1e995204a5');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('55a9fed8-ee47-11ec-bc78-bb92200ffcb7', 1000, '2022-06-30 00:00:00.000000', 1, 'CONGE_PAYE', '5ed681ee-ee46-11ec-9718-e37f08cbdc4b');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('55a9ff3c-ee47-11ec-bc7b-03bbe4773977', 1000, '2022-06-30 00:00:00.000000', 1, 'CONGE_PAYE', '5ed681b2-ee46-11ec-9716-5fc370c91a5d');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('55a9ff00-ee47-11ec-bc79-073024800e2a', 1000, '2022-06-30 00:00:00.000000', 1, 'CONGE_PAYE', '5ed68158-ee46-11ec-9713-8b343528e349');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('55a9fda2-ee47-11ec-bc77-57244289fc8a', 1000, '2022-06-30 00:00:00.000000', 1, 'CONGE_PAYE', '5ed6804a-ee46-11ec-9711-0fd3e61d36dd');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('55a9ff5a-ee47-11ec-bc7c-4707bd53ee40', 1000, '2022-06-30 00:00:00.000000', 1, 'CONGE_PAYE', '5ed681d0-ee46-11ec-9717-7bc21310e506');
INSERT INTO public.salary (salary_id, amount, billing_date, periodicity, type, employee_id_fk) VALUES ('55a9ff1e-ee47-11ec-bc7a-f35d3b7eacf9', 1000, '2022-06-30 00:00:00.000000', 1, 'CONGE_PAYE', '5ed6822a-ee46-11ec-971a-13fb66bf0d85');
