# Migration `20200405124949-make-tag-name-unique`

This migration has been generated by Adrian Mróz at 4/5/2020, 12:49:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE UNIQUE INDEX "quaint"."Tag.name" ON "Tag"("name")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200404195400-making-users-email-column-unique..20200405124949-make-tag-name-unique
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
@@ -41,9 +41,9 @@
 }
 model Tag {
   id Int @default(autoincrement()) @id
-  name String
+  name String @unique
   vouchers Voucher[] @relation(references: [id])
 }
 model Category {
```


