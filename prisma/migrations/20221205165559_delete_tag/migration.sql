-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_videoTags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_video" TEXT NOT NULL,
    "id_tag" TEXT NOT NULL,
    CONSTRAINT "videoTags_id_video_fkey" FOREIGN KEY ("id_video") REFERENCES "videos" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "videoTags_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_videoTags" ("id", "id_tag", "id_video") SELECT "id", "id_tag", "id_video" FROM "videoTags";
DROP TABLE "videoTags";
ALTER TABLE "new_videoTags" RENAME TO "videoTags";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
