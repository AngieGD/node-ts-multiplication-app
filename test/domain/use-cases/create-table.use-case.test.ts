
import { CreateTable } from "../../../src/domain/use-cases/create-table.use-case";

describe('domain/use-cases/create-table.use-case.ts', () => {
    test('Should create table with default values', () => {
        const table = new CreateTable().execute({ base:3, limit:10 });
        const tableIns = new CreateTable();
        //console.log(table);
        expect(tableIns).toBeInstanceOf(CreateTable);
        expect(table).toContain('3 X 2 = 6');
        expect(table).toContain('3 X 3 = 9');
    })
})