import fs from 'fs';
import {handleNameSorting} from './handleSorting';

const READ_FILE_PATH = './files/unsorted-names-list.txt';
const EXPORT_FILE_PATH = './files/sorted-names-list.txt';

const handleFile = ():void => {
    fs.readFile(READ_FILE_PATH, 'utf8', async (error, data) => {
        const result = handleNameSorting(data).join("\n")
        const handleWriteFile = await fs.writeFile(EXPORT_FILE_PATH, result, (error) => {});
    })
    console.log("Handle Files Done!")
}

export default handleFile;

