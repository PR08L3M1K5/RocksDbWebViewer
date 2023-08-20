import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DatabaseViewInterface} from "../types/database-view.interface";
import {ObjectFromDatabaseInterface} from "../types/object-from-database.interface";
import {GenericResponseInterface} from "../types/generic-response.interface";

@Injectable({providedIn: 'root'})
export class DatabaseViewService {
  private apiURL = "http:168.119.116.3/api/database/view";

  constructor(private http: HttpClient) {
  }

  getDatabaseView(databaseName:string):Observable<DatabaseViewInterface>{
    return this.http.get<DatabaseViewInterface>(`${this.apiURL}/${databaseName}`)
  }
  getDatabaseObjectFromKey(key:string,databaseName:string):Observable<GenericResponseInterface>{
    return this.http.get<GenericResponseInterface>(`${this.apiURL}/${databaseName}/object/${key}`)
  }
  removeDatabaseConfiguration(databaseName:string):Observable<boolean>{
    return this.http.delete<boolean>(`${this.apiURL}/${databaseName}`)
  }
}
