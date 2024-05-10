import * as fs from 'fs';
interface SaveFileUseCaseI {
  execute: (options: OptionsSaveFile) => boolean

}

interface OptionsSaveFile {
  fileContent: string;
  base: number;
  destination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCaseI {

  constructor() { };

  execute({
    fileContent,
    base,
    destination = 'outputs',
    fileName = 'tabla' }: OptionsSaveFile): boolean {
    const headMessage = `
======================
     Tabla del ${base}      
======================
`;
    const logToFile = (message: string, filePath: string) => {
      fs.appendFileSync(filePath, message)
    }
    fileContent = headMessage + fileContent;

    try {
      fs.mkdirSync(destination, { recursive: true })

      logToFile(fileContent, `${destination}/${fileName}-${base}.txt`)

      return true;

    } catch (error) {
      return false;
    }
  }
}