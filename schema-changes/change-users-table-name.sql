DROP TABLE "public"."Users" CASCADE;

CREATE TABLE "public"."User" (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(128),
    email VARCHAR(128) UNIQUE NOT NULL,
    password VARCHAR(128) NOT NULL,
    isChild BOOLEAN NOT NULL DEFAULT false
);