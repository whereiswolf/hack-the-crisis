# Migration `20200404195400-making-users-email-column-unique`

This migration has been generated by Adrian Mróz at 4/4/2020, 7:54:00 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE UNIQUE INDEX "quaint"."User.email" ON "User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200404194709-add-account-type-column-to-users-table..20200404195400-making-users-email-column-unique
--- datamodel.dml
+++ datamodel.dml
@@ -3,14 +3,14 @@
 }
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "file:./dev.db"
 }
 model User {
   id Int @default(autoincrement()) @id
-  email String
+  email String @unique
   password String
   orders Order[]
   accountType Int @default(1)
 }
```

