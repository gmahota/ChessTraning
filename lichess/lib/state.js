import fs from 'fs';

export function saveJson(filePath, content) {
  const contentString = JSON.stringify(content);

  // Create directory if it doesn't exist
  const directoryPath = filePath.substring(0, filePath.lastIndexOf('/'));
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  return fs.writeFileSync(filePath, contentString);
}

export function saveText(filePath,content) {
  // Create directory if it doesn't exist
  const directoryPath = filePath.substring(0, filePath.lastIndexOf("/"));
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
  
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

