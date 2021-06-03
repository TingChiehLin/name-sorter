import fileExist from "../src/utilities/fileExist";
import fs from 'fs';

import {handleSortName} from "../src/utilities/handleSorting";
import handleFile from '../src/utilities/handleFile';
import handleContainText from "../src/utilities/handleContainText";

describe("Test File", () => {

    it("should generate sorted-names-list.txt file with sorted names", (done) => {
        handleFile();
        expect(fileExist("files/sorted-names-list.txt"))
        done()
    })

    it('should run correctly on handleNameSorting function', (done) => {
        const testNameFile: string[] = ["Emma Watson", "Angelina Jolie", "Tom Cruise", "Brad Pitt"]
        const expectedNameResult: string[] = ['Tom Cruise', 'Angelina Jolie', 'Brad Pitt', 'Emma Watson']
        expect(handleSortName(testNameFile)).toEqual(expectedNameResult)
        done()
    });

    it('should have a name called Marin Alvarez', (done) => {
        const PATH = "files/sorted-names-list.txt"
        const testText = "'Marin Alvarez"
        expect(handleContainText(PATH, testText)).toBe(true)
        done()
    });
})



