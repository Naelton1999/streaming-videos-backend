-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "videos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "videoTags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_video" TEXT NOT NULL,
    "id_tag" TEXT NOT NULL,
    CONSTRAINT "videoTags_id_video_fkey" FOREIGN KEY ("id_video") REFERENCES "videos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "videoTags_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_TagsToVideos" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_TagsToVideos_A_fkey" FOREIGN KEY ("A") REFERENCES "tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TagsToVideos_B_fkey" FOREIGN KEY ("B") REFERENCES "videos" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_TagsToVideos_AB_unique" ON "_TagsToVideos"("A", "B");

-- CreateIndex
CREATE INDEX "_TagsToVideos_B_index" ON "_TagsToVideos"("B");
