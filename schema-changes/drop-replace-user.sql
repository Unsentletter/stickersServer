DROP TABLE "public"."User" CASCADE;

CREATE TABLE "public"."User" (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(128),
    email VARCHAR(128) UNIQUE,
    password VARCHAR(128) NOT NULL,
    isChild BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);