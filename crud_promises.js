import fs from 'fs/promises'
import { readFile } from 'fs'

async function readFileContent(filename) {
    const data = await fs.readFile(filename, 'utf-8');
    console.log( data);

}
readFileContent('notes.txt')    
 