# Migration `20200404122717-add-tags-and-categories`

This migration has been generated by iqpc.mobile.native at 4/4/2020, 12:27:17 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."VoucherTag" (
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL  
) 

CREATE TABLE "quaint"."BusinessCategory" (
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL  
) 

ALTER TABLE "quaint"."Business" ADD COLUMN "categoryId" INTEGER   ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200404121620-change-relation-vouchres-business..20200404122717-add-tags-and-categories
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "file:./dev.db"
 }
 model Voucher {
   id Int @default(autoincrement()) @id
@@ -15,11 +15,24 @@
   imageUrl String
   price Float
   promotion Float?
   businessId Int?
-  company Business? @relation(fields: [businessId], references: [id])
+  business Business? @relation(fields: [businessId], references: [id])
+  tags VoucherTag? @relation(references: [id])
 }
+model VoucherTag {
+  id Int @default(autoincrement()) @id
+  name String
+  vouchers Voucher[] @relation(references: [id])
+}
+
+model BusinessCategory {
+  id Int @default(autoincrement()) @id
+  name String
+  businesses Business[]
+}
+
 model Business {
   id Int @default(autoincrement()) @id
   name String
   city String
@@ -30,7 +43,9 @@
   history String?
   imageUrl String
   type String
   vouchers Voucher[]
+  categoryId Int?
+  category BusinessCategory? @relation(fields: [categoryId], references: [id])
 }
```


