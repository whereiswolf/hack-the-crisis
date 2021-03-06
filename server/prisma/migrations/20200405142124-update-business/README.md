# Migration `20200405142124-update-business`

This migration has been generated by Adrian Mróz at 4/5/2020, 2:21:24 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_Rating" (
    "businessId" INTEGER   ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "rate" INTEGER NOT NULL  ,FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE
) 

INSERT INTO "quaint"."new_Rating" ("businessId", "id", "rate") SELECT "businessId", "id", "rate" FROM "quaint"."Rating"

DROP TABLE "quaint"."Rating";

ALTER TABLE "quaint"."new_Rating" RENAME TO "Rating";

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200405141335-add-business-id-to-rating-table..20200405142124-update-business
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "file:./dev.db"
 }
 model User {
   id Int @default(autoincrement()) @id
@@ -51,15 +51,8 @@
   name String
   businesses Business[]
 }
-model Rating {
-  id Int @default(autoincrement()) @id
-  rate Int
-  businessId Int?
-  business Business? @relation(fields: [businessId], references: [id])
-}
-
 model Business {
   id Int @default(autoincrement()) @id
   name String
   city String
@@ -72,8 +65,13 @@
   type String
   vouchers Voucher[]
   categoryId Int?
   category Category? @relation(fields: [categoryId], references: [id])
-  ratings Rating[] @relation(references: [id])
+  ratings Rating[]
 }
-
+model Rating {
+  id Int @default(autoincrement()) @id
+  rate Int
+  businessId Int?
+  business Business? @relation(fields: [businessId], references: [id])
+}
```


