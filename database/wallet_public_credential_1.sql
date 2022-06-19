create table credential
(
    credential_id uuid not null
        primary key,
    actif         boolean,
    email         varchar(255),
    password      varchar(255),
    username      varchar(255)
        constraint uk_cy9bwr22tkmr9hl2iecjqcwvg
            unique
);

alter table credential
    owner to wallet;

INSERT INTO public.credential (credential_id, actif, email, password, username) VALUES ('766e85c6-3c78-4bd7-88b9-361f91f37670', true, null, '$2a$10$KXAILb.BHDwQ8c81uQAj8OhRlAGlU/KVhMvGv4K/mDhhbAc5TPB3O', 'captain');
INSERT INTO public.credential (credential_id, actif, email, password, username) VALUES ('d0790b87-f01b-4320-a35f-fe39d22cf078', true, null, '$2a$10$YuyDu.8YEZbVOYKs1K0SW.mgT7jiGjeru5mVsOGCbYhkHVybDiqtC', 'laure');
INSERT INTO public.credential (credential_id, actif, email, password, username) VALUES ('81650afc-0c4d-478d-a1ec-f97678860bee', true, null, '$2a$10$Nz1fspQwD8zgjsTs5PKK6uFfoQMHDihSq/RsL13GC.rZHw2LsTcbi', 'merlin');
INSERT INTO public.credential (credential_id, actif, email, password, username) VALUES ('e1b551b4-2cf5-4e48-a4d5-c59fe1357d7c', true, null, '$2a$10$Q5SfnxjjGTWOvnBziee/6OIX4wNHsXGUpwav9NLrN1OZh50frJmPi', 'bavette');
INSERT INTO public.credential (credential_id, actif, email, password, username) VALUES ('fbdd1672-0c9d-420c-bd70-2195cac90ea4', true, null, '$2a$10$EeXK74Yll.Lb7OSkczEhceauYXUZORALnGgNC3BFR1/uZ33uku.jK', 'anne');
INSERT INTO public.credential (credential_id, actif, email, password, username) VALUES ('3171ea4d-39cb-4fec-8949-f98211a067d9', true, null, '$2a$10$LeEhnKWHuiCImRY/ZYYMSOcua3MF3B5UEt0QIjQiBcQTNaDavC4Ha', 'peach');
INSERT INTO public.credential (credential_id, actif, email, password, username) VALUES ('05d84fc6-4099-46a4-b86c-12e578222749', true, null, '$2a$10$BteP1YZMrX0GOpV.IxS/wO8N/Db42XkqQmJLdlTaaXrrsSxmi8zCm', 'choupette');
