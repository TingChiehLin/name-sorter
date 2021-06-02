import fileExist from "../src/utilities/fileExist";
import fs from 'fs';

import {handleSortName} from "../src/utilities/handleSorting";
import handleFile from '../src/utilities/handleFile';

describe("Test File", () => {

    it("should generate sorted-names-list.txt file with sorted names", (done) => {
        handleFile();
        expect(fileExist("files/sorted-names-list.txt"))
        done()
    })

    it('should run correctly on handleNameSorting function', (done) => {
        const testNameFile:string[] = ["Emma Watson","Angelina Jolie","Tom Cruise","Brad Pitt"]
        const expectedNameResult:string[] = ['Tom Cruise','Angelina Jolie','Brad Pitt','Emma Watson']
        expect(handleSortName(testNameFile)).toBe(expectedNameResult)
        done()
    });

    it('should have a name called Marin Alvarez', async (done) => {
        const PATH = "files/sorted-names-list.txt"
        const file = await fs.readFile(PATH,(err)=>{});
        expect(file).toContain('Marin Alvarez')
    });
})



