-- CreateTable
CREATE TABLE "ChildUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ChildUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ChildUser_email_key" ON "ChildUser"("email");

-- AddForeignKey
ALTER TABLE "ChildUser" ADD CONSTRAINT "ChildUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
