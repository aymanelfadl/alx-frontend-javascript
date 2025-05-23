/// <reference path=" crud.d.ts"/>

import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Ayman',
  lastName: 'Elfadl',
  age: 25
};

const newRowID: RowID = CRUD.insertRow(row);

row.age = 23;
const updateRow: RowElement = CRUD.updateRow(newRowID, row);

CRUD.deleteRow(row);