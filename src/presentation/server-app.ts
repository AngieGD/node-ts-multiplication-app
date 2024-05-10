import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface Options {
  base: number,
  limit: number,
  showTable: boolean,
  name:string,
  destination:string
}

export class AppServer {

  static run(options: Options) {

    console.log('Server running......');
    console.log(options)
    const {base, limit, showTable, name, destination} = options;
    const fileContent = new CreateTable().execute({base, limit});

    const wasCreated =  new SaveFile().execute({fileContent, base, destination:destination, fileName:name});

    if (showTable) console.log(fileContent);

    (wasCreated)
      ? console.log('File Created!')
      : console.log('File not created!')



  }
}