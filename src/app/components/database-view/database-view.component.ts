import { Component } from '@angular/core';
import {DatabaseViewInterface} from "../../../types/database-view.interface";
import {ObjectFromDatabaseInterface} from "../../../types/object-from-database.interface";
import {mergeMap, ObjectUnsubscribedError, Observable, of, switchMap} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ActivatedRoute} from "@angular/router";
import {DatabaseViewService} from "../../../services/database-view.service";
import {GenericResponseInterface} from "../../../types/generic-response.interface";
import {ToastrService} from "ngx-toastr";
import {
  CreateDatabaseConfigurationDialogComponent
} from "../databse-selection/create-databse-configuration-dailog/create-database-configuration-dialog.component";
import {DatabaseConfigurationInterface} from "../../../types/DatabaseConfiguration.interface";
import {MatDialog} from "@angular/material/dialog";
import {DatabaseSingleObjectViewComponent} from "./database-single-object-view/database-single-object-view.component";


@Component({
  selector: 'app-database-view',
  templateUrl: './database-view.component.html',
  styleUrls: ['./database-view.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class DatabaseViewComponent {
  databaseName:string = "";
  dataSource = new MatTableDataSource<ObjectFromDatabaseInterface>();
  displayedColumns:string[]=[]
  expandedElement!: ObjectFromDatabaseInterface;
  searchKey?: string;
  constructor(public dialog: MatDialog,private route: ActivatedRoute,private databaseViewService:DatabaseViewService,private toastr: ToastrService,) {
    this.route.params.pipe(mergeMap(param=>databaseViewService.getDatabaseView(param["databaseName"])))
      .subscribe({next:(result:DatabaseViewInterface)=>{
        this.databaseName = result.databaseName;
        this.displayedColumns = result.objectValuesNames;
        this.displayedColumns.push("key")
        this.dataSource = new MatTableDataSource<ObjectFromDatabaseInterface>(result.databaseObjects);
        console.log(this.displayedColumns)
        }})
  }

  searchDatabaseObject() {
    if(!this.searchKey)
      return;
    this.databaseViewService.getDatabaseObjectFromKey(this.searchKey,this.databaseName).subscribe({next:(result:GenericResponseInterface)=>{
      if(result.statusCode==200){
        const dialogRef = this.dialog.open(DatabaseSingleObjectViewComponent, {
          height: '1000px',
          width: '700px',
          data: result.result,
        });
      }else
        this.toastr.error(result.message)
      }})
  }
}

