import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DatabaseConfigurationInterface} from "../../../../types/DatabaseConfiguration.interface";
import {ObjectFromDatabaseInterface} from "../../../../types/object-from-database.interface";

@Component({
  selector: 'app-database-single-object-view',
  templateUrl: './database-single-object-view.component.html',
  styleUrls: ['./database-single-object-view.component.css']
})
export class DatabaseSingleObjectViewComponent {
  constructor(public dialogRef?: MatDialogRef<DatabaseSingleObjectViewComponent>, @Inject(MAT_DIALOG_DATA) public data?: ObjectFromDatabaseInterface,) {}

}
