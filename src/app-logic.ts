import * as fs from 'fs';
import { yarg } from './config/plugins/yargs-plugin';

const {b:base, l:limit, s:showTable} = yarg;

const headMessage = `
======================
     Tabla del ${base}      
======================
`;
let bodyMessage: string = '';

const logToFile = (message: string, filePath: string) => {
    fs.appendFileSync(filePath, message)

}


for (let i = 1; i <= limit; i++) {
    bodyMessage += `${base} X ${i} = ${i * base}\n`
}

bodyMessage = headMessage + bodyMessage;



const outputs = 'outputs'

fs.mkdirSync(outputs, { recursive: true })

logToFile(bodyMessage, `${outputs}/tabla-${base}.txt`)

if (showTable) console.log(bodyMessage);

console.log('File created!')

