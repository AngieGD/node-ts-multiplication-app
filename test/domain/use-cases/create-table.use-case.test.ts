
import { CreateTable } from "../../../src/domain/use-cases/create-table.use-case";

describe('domain/use-cases/create-table.use-case.ts', () => {
    test('Should create table with default values', () => {
        const options = {
            base: 3,
            limit: 10,
        };
        const table = new CreateTable().execute(options);
        const tableIns = new CreateTable();
        const rows = table.split('\n').length;
        console.log(table);
        expect(tableIns).toBeInstanceOf(CreateTable);
        expect(table).toContain(`${options.base} X ${options.limit} = ${options.base*options.limit}`);
        expect(rows).toBe(options.limit);
    })
})