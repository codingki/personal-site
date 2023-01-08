import fs from "fs";
import path from "path";

const shotsDir = path.join(process.cwd(), "public/shots");
export const getShots = () => {
  const shots = fs.readdirSync(shotsDir);
  const shotsPaths = shots.map((fileName) => {
    const id = fileName.replace(/\.JPG$/, "");

    const imagePath = `/shots/${id}.jpg`;

    return {
      id,
      imagePath,
    };
  });

  return shotsPaths.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    }
    return 0;
  });
};
