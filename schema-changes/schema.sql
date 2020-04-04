CREATE TABLE "public"."Users" (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(128),
    email VARCHAR(128) UNIQUE NOT NULL,
    password VARCHAR(128) NOT NULL,
    isChild BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE "public"."Stickers" (
    id SERIAL PRIMARY KEY NOT NULL,
    tally INTEGER DEFAULT 0
);
