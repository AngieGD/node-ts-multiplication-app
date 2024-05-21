interface CreateTableInterface {
	execute: (options: OptionsCreateTable) => string;
}

interface OptionsCreateTable {
	limit: number;
	base: number;
}

/**
 * Clase encargada de gestionar el caso de uso de creación de una tabla
 */
export class CreateTable implements CreateTableInterface {
	constructor() {}

	execute({ base, limit }: OptionsCreateTable) {
		let bodyMessage: string = "";

		for (let i = 1; i <= limit; i++) {
			bodyMessage += `${base} X ${i} = ${i * base}`;
			if (i < limit) bodyMessage += "\n";
		}
		return bodyMessage;
	}
}
