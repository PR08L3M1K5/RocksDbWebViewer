import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DatabaseConfigurationInterface} from "../types/DatabaseConfiguration.interface";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {GenericResponseInterface} from "../types/generic-response.interface";

@Injectable({providedIn: 'root'})
export class DatabaseSelectionService {
  private apiURL = "http://168.119.116.3/api/database/configuration";

  constructor(private http: HttpClient) {
  }

  getAllDatabasesConfigurations(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiURL}`);
  }

  saveDatabaseConfiguration(databaseConfiguration: DatabaseConfigurationInterface):Observable<GenericResponseInterface> {
    return this.http.post<GenericResponseInterface>(`${this.apiURL}`,databaseConfiguration);
  }

  removeDatabaseConfiguration(databaseName:string):Observable<boolean>{
    return this.http.delete<boolean>(`${this.apiURL}/${databaseName}`)
  }
}
