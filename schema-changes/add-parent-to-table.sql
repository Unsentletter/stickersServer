ALTER TABLE "public"."Stickers"
    ADD COLUMN parent VARCHAR(128);
    
ALTER TABLE "public"."Stickers"
    ADD CONSTRAINT parent FOREIGN KEY (id)
    REFERENCES "public"."Users"(id)