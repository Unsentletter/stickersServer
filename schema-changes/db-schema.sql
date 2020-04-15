CREATE TABLE "public"."Relationships" (
    id SERIAL PRIMARY KEY NOT NULL,
    parent_id INT NOT NULL,
    FOREIGN KEY (parent_id) REFERENCES "public"."User" (id),
    child_id INT NOT NULL,
    FOREIGN KEY (child_id) REFERENCES "public"."User" (id)
)

CREATE TABLE "public"."User" (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(128) NOT NULL,
    email VARCHAR(128) UNIQUE,
    password VARCHAR(128) NOT NULL,
    isChild BOOLEAN NOT NULL DEFAULT false
    created_at TIMESTAMP NOT NULL DEFAULT NOW();
);
