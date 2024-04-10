-- CreateTable
CREATE TABLE `Authors` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `Pseudonym` VARCHAR(191) NOT NULL,
    `BirthDate` DATETIME(3) NOT NULL,
    `Nationality` VARCHAR(191) NOT NULL,
    `StatusId` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Authors_Pseudonym_key`(`Pseudonym`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Books` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `ISBN` VARCHAR(191) NOT NULL,
    `Title` VARCHAR(191) NOT NULL,
    `Subtitle` VARCHAR(191) NOT NULL,
    `PublishDate` DATETIME(3) NOT NULL,
    `Pages` INTEGER NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `AuthorId` INTEGER NOT NULL,
    `EditorialId` INTEGER NOT NULL,
    `CategoryId` INTEGER NOT NULL,
    `LanguageId` INTEGER NOT NULL,
    `StatusId` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Books_ISBN_key`(`ISBN`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categories` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `StatusId` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Categories_Name_key`(`Name`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Editorials` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Phone` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Website` VARCHAR(191) NOT NULL,
    `StatusId` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Editorials_Name_key`(`Name`),
    UNIQUE INDEX `Editorials_Email_key`(`Email`),
    UNIQUE INDEX `Editorials_Website_key`(`Website`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Languages` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `StatusId` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Languages_Name_key`(`Name`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Statuses` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Statuses_Name_key`(`Name`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Authors` ADD CONSTRAINT `Authors_StatusId_fkey` FOREIGN KEY (`StatusId`) REFERENCES `Statuses`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_AuthorId_fkey` FOREIGN KEY (`AuthorId`) REFERENCES `Authors`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_EditorialId_fkey` FOREIGN KEY (`EditorialId`) REFERENCES `Editorials`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_CategoryId_fkey` FOREIGN KEY (`CategoryId`) REFERENCES `Categories`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_LanguageId_fkey` FOREIGN KEY (`LanguageId`) REFERENCES `Languages`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Books` ADD CONSTRAINT `Books_StatusId_fkey` FOREIGN KEY (`StatusId`) REFERENCES `Statuses`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Categories` ADD CONSTRAINT `Categories_StatusId_fkey` FOREIGN KEY (`StatusId`) REFERENCES `Statuses`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Editorials` ADD CONSTRAINT `Editorials_StatusId_fkey` FOREIGN KEY (`StatusId`) REFERENCES `Statuses`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Languages` ADD CONSTRAINT `Languages_StatusId_fkey` FOREIGN KEY (`StatusId`) REFERENCES `Statuses`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
