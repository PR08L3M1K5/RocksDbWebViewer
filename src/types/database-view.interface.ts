import {ObjectFromDatabaseInterface} from "./object-from-database.interface";

export interface DatabaseViewInterface{
  databaseName:string;
  databaseObjects:ObjectFromDatabaseInterface[];
  objectValuesNames:string[];
}
