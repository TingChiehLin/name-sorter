import fs from "fs";

const handleContainText = (path:string, text:string):boolean => {
    try {
        fs.readFile(path,(err,data)=>{
            if(data.includes(text)){
                return true
            }
        });
        return true
    }
    catch(err) {
        return false
    }
}

export default handleContainText
