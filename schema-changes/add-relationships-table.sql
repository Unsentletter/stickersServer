CREATE TABLE "public"."Relationships" (
    id SERIAL PRIMARY KEY NOT NULL,
    parent_id INT NOT NULL,
    FOREIGN KEY (parent_id) REFERENCES "public"."User" (id),
    child_id INT NOT NULL,
    FOREIGN KEY (child_id) REFERENCES "public"."User" (id)
)