create table organization
(
    organization_id uuid    not null
        primary key,
    actif           boolean not null,
    description     varchar(255),
    name            varchar(255)
);

alter table organization
    owner to wallet;

INSERT INTO public.organization (organization_id, actif, description, name) VALUES ('abb2b2da-ee46-11ec-8454-9f1786023e2d', true, 'Siège social', 'Papa''s Travel Liège');
INSERT INTO public.organization (organization_id, actif, description, name) VALUES ('abb2b406-ee46-11ec-8455-bf82ed3f8b3b', true, 'Filiale', 'Papa''s Travel Huy');
INSERT INTO public.organization (organization_id, actif, description, name) VALUES ('abb2b438-ee46-11ec-8456-07023bb54550', true, 'Filiale', 'Papa''s Travel Seraing');
INSERT INTO public.organization (organization_id, actif, description, name) VALUES ('abb2b456-ee46-11ec-8457-6bd9309ff27f', true, 'Filiale', 'Papa''s Travel Hannut');
