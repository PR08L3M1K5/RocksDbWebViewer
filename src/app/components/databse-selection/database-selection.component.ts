import {Component, OnInit} from '@angular/core';
import {DatabaseConfigurationInterface} from "../../../types/DatabaseConfiguration.interface";
import {Observable, of} from "rxjs";
import {
  CreateDatabaseConfigurationDialogComponent
} from "./create-databse-configuration-dailog/create-database-configuration-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {DatabaseSelectionService} from "../../../services/database-selection.service";
import {GenericResponseInterface} from "../../../types/generic-response.interface";

@Component({
  selector: 'app-database-selection',
  templateUrl: './database-selection.component.html',
  styleUrls: ['./database-selection.component.css']
})
export class DatabaseSelectionComponent implements OnInit {
  databaseList?: Observable<string[]>;

  constructor(public dialog: MatDialog, private toastr: ToastrService, private databaseSelectionService: DatabaseSelectionService) {
    this.getDatabaseConfigurationList()
  }


  ngOnInit(): void {
  }

  addNewDatabaseConfiguration() {

    const dialogRef = this.dialog.open(CreateDatabaseConfigurationDialogComponent, {
      height: '700px',
      width: '700px',
      data: <DatabaseConfigurationInterface>{databaseName: "", databasePath: ""},
    });

    dialogRef.afterClosed().subscribe((result: DatabaseConfigurationInterface) => {
      if (result == undefined)
        return;
      this.databaseSelectionService.saveDatabaseConfiguration(result).subscribe({next:(response:GenericResponseInterface)=>{
          if (response.statusCode==200) {
            this.toastr.success('', response.message);
            this.getDatabaseConfigurationList()
          } else
            this.toastr.error(response.message)
        }}
      )

    });
  }

  removeDatabaseConfiguration(databaseConfiguration: string) {
    this.databaseSelectionService.removeDatabaseConfiguration(databaseConfiguration).subscribe({
      next: (result: boolean) => {
        if (result) {
          this.toastr.success('', 'Database configuration deleted successfully!');
          this.getDatabaseConfigurationList()
        } else {
          this.toastr.error("Error while deleting database configuration ")
        }

      }
    })
  }

  getDatabaseConfigurationList() {
    this.databaseSelectionService.getAllDatabasesConfigurations().subscribe({
      next: (response: string[]) => {
        this.databaseList = of(response)
      }
    })
  }

  openDatabaseViewInNewTab(databaseName: string) {
    window.open('/database-view/'+databaseName);
  }
}
