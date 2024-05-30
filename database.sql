-- SQL DATA USED FOR OUT TABLE VALUES -- 

CREATE TABLE "food" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80),
    "quantity" DECIMAL,
    "unit" VARCHAR(20),
    "isPurchased" BOOLEAN DEFAULT FALSE 
);


INSERT INTO food ("name", "quantity", "unit")
VALUES ('Tacos', 12.2, 'tons' ), ('Pizza', 14, 'pounds' ), ('Milk', 11, 'ounces');

SELECT * FROM food ORDER BY name;

TRUNCATE TABLE "food";

UPDATE "food" SET "isPurchased" = FALSE;
