import { writeFile, readFile } from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const save = async (data) => {
  const currentData = JSON.parse((await readFile(path.join(__dirname, '../', 'database.json'))))
  currentData.push(data)
  await writeFile(path.join(__dirname, '../', 'database.json'), JSON.stringify(currentData))
}