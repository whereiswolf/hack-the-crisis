# Migration `20200404123254-many-to-many`

This migration has been generated by iqpc.mobile.native at 4/4/2020, 12:32:54 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."TagsOnVouchers" (
    "tagId" INTEGER NOT NULL  ,
    "voucherId" INTEGER NOT NULL  ,
    PRIMARY KEY ("voucherId","tagId"),FOREIGN KEY ("voucherId") REFERENCES "Voucher"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("tagId") REFERENCES "VoucherTag"("id") ON DELETE CASCADE ON UPDATE CASCADE
) 

CREATE TABLE "quaint"."_VoucherToVoucherTag" (
    "A" INTEGER NOT NULL  ,
    "B" INTEGER NOT NULL  ,FOREIGN KEY ("A") REFERENCES "Voucher"("id") ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY ("B") REFERENCES "VoucherTag"("id") ON DELETE CASCADE ON UPDATE CASCADE
) 

PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_Business" (
    "address" TEXT NOT NULL  ,
    "amount" REAL NOT NULL  ,
    "categoryId" INTEGER   ,
    "city" TEXT NOT NULL  ,
    "description" TEXT NOT NULL  ,
    "history" TEXT   ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "imageUrl" TEXT NOT NULL  ,
    "name" TEXT NOT NULL  ,
    "siteUrl" TEXT   ,
    "type" TEXT NOT NULL  ,FOREIGN KEY ("categoryId") REFERENCES "BusinessCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE
) 

INSERT INTO "quaint"."new_Business" ("address", "amount", "categoryId", "city", "description", "history", "id", "imageUrl", "name", "siteUrl", "type") SELECT "address", "amount", "categoryId", "city", "description", "history", "id", "imageUrl", "name", "siteUrl", "type" FROM "quaint"."Business"

DROP TABLE "quaint"."Business";

ALTER TABLE "quaint"."new_Business" RENAME TO "Business";

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;

CREATE UNIQUE INDEX "quaint"."_VoucherToVoucherTag_AB_unique" ON "_VoucherToVoucherTag"("A","B")

CREATE  INDEX "quaint"."_VoucherToVoucherTag_B_index" ON "_VoucherToVoucherTag"("B")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200404122717-add-tags-and-categories..20200404123254-many-to-many
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
@@ -16,15 +16,23 @@
   price Float
   promotion Float?
   businessId Int?
   business Business? @relation(fields: [businessId], references: [id])
-  tags VoucherTag? @relation(references: [id])
+  tags VoucherTag[]
 }
+model TagsOnVouchers {
+  voucher Voucher @relation(fields: [voucherId], references: [id])
+  voucherId Int       
+  tag VoucherTag @relation(fields: [tagId], references: [id])
+  tagId Int
+  @@id([voucherId, tagId])
+}
+
 model VoucherTag {
   id Int @default(autoincrement()) @id
   name String
-  vouchers Voucher[] @relation(references: [id])
+  vouchers Voucher[]
 }
 model BusinessCategory {
   id Int @default(autoincrement()) @id
```

