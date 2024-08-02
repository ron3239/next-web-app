-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "coin" INTEGER NOT NULL DEFAULT 0,
    "coin_tap" INTEGER NOT NULL DEFAULT 0,
    "coin_hour" INTEGER NOT NULL DEFAULT 0,
    "last_update_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserUpgrade" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "upgradeId" INTEGER NOT NULL,
    "currentLevel" INTEGER NOT NULL,
    "purchasedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserUpgrade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upgrade" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Upgrade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UpgradeLevelCost" (
    "id" SERIAL NOT NULL,
    "upgradeId" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "coinPerHour" INTEGER NOT NULL,

    CONSTRAINT "UpgradeLevelCost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_user_key" ON "User"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Upgrade_name_key" ON "Upgrade"("name");

-- AddForeignKey
ALTER TABLE "UserUpgrade" ADD CONSTRAINT "UserUpgrade_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserUpgrade" ADD CONSTRAINT "UserUpgrade_upgradeId_fkey" FOREIGN KEY ("upgradeId") REFERENCES "Upgrade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpgradeLevelCost" ADD CONSTRAINT "UpgradeLevelCost_upgradeId_fkey" FOREIGN KEY ("upgradeId") REFERENCES "Upgrade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
