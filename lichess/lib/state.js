import fs from 'fs';

export function saveJson(filePath, content) {
  const contentString = JSON.stringify(content);
  return fs.writeFileSync(filePath, contentString);
}

export function saveText(filePath,content) {
    return fs.writeFileSync(filePath, content);
}

export function  loadJson   (contentFilePath) {
  const fileBuffer = fs.readFileSync(contentFilePath, "utf-8");
  const contentJson = JSON.parse(fileBuffer);
  return contentJson;
}

export function load(contentFilePath) {
  const fileBuffer = fs.readFileSync(contentFilePath, "utf-8");
  //const contentJson = JSON.parse(fileBuffer);
  return fileBuffer;
}

