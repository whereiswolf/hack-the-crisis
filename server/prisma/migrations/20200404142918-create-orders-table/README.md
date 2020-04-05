# Migration `20200404142918-create-orders-table`

This migration has been generated by iqpc.mobile.native at 4/4/2020, 2:29:18 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Order" (
    "count" INTEGER  DEFAULT 1 ,
    "email" TEXT NOT NULL  ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL  ,
    "voucherId" INTEGER NOT NULL  ,FOREIGN KEY ("voucherId") REFERENCES "Voucher"("id") ON DELETE CASCADE ON UPDATE CASCADE
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200404141800-change-raiting-column-name..20200404142918-create-orders-table
--- datamodel.dml
+++ datamodel.dml
@@ -3,11 +3,20 @@
 }
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "file:./dev.db"
 }
+model Order {
+  id Int @default(autoincrement()) @id
+  email String
+  name String
+  count Int? @default(1)
+  voucherId Int
+  voucher Voucher @relation(fields: [voucherId], references: [id])
+}
+
 model Voucher {
   id Int @default(autoincrement()) @id
   name String
   expirationDate String?
@@ -17,8 +26,9 @@
   promotion Float?
   businessId Int?
   business Business? @relation(fields: [businessId], references: [id])
   tags Tag[] @relation(references: [id])
+  orders Order[]
 }
 model Tag {
   id Int @default(autoincrement()) @id
```

