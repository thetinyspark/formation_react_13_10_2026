import fs from "fs"; 

function copyAssets() {
  const sourceDir = "./assets";
  const targetDir = "dist/assets";
  fs.mkdirSync(targetDir, { recursive: true });
  fs.readdirSync(sourceDir).forEach((file) => {
    fs.copyFileSync(`${sourceDir}/${file}`, `${targetDir}/${file}`);
  });
}
copyAssets();