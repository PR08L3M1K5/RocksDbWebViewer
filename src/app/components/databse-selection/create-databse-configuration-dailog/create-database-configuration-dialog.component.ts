import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {DatabaseConfigurationInterface} from "../../../../types/DatabaseConfiguration.interface";

@Component({
  selector: 'app-create-database-configuration-dialog',
  templateUrl: './create-database-configuration-dialog.component.html',
  styleUrls: ['./create-database-configuration-dialog.component.css']
})
export class CreateDatabaseConfigurationDialogComponent {
  databaseNameFormControl = new FormControl('', [Validators.required]);
  databasePathFormControl = new FormControl('', [Validators.required]);
  serializationTypeFormControl = new FormControl('', [Validators.required]);
  collectionTypeFormControl = new FormControl('', [Validators.required]);
  selectedClassFormControl = new FormControl('', [Validators.required]);
  sshHostFormControl =  new FormControl('', [Validators.required]);

  serializationTypes: string[] = ["Class", "Gson", "Collection"]

  listOfAvailableCollections: string[] = ["List", "Set", "Map"]
  listOfAvailableClasses: string[] = ["Custom class", "Integer", "String", "Long", "Boolean", "Double"]
  isClassSelected: boolean = false;

  isCollectionSelected: boolean = false;
  isGsonSelected: boolean = false;
  isCustomClassSelected = false;
  fileToUpload: File | null = null;

  isFileValid: boolean = false;
  sshConnection: boolean = false;

  constructor(public dialogRef?: MatDialogRef<CreateDatabaseConfigurationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data?: DatabaseConfigurationInterface,) {
  }

  addDatabaseConfiguration() {
    this.dialogRef!.close(this.data);
  }

  setSerializationType(serializationType: string) {
    this.data!.serializationType = serializationType;
    switch (serializationType) {
      case "Collection":
        this.isCollectionSelected = true;
        this.isClassSelected = true;
        this.isFileValid = false;
        break;
      case "Gson":
        this.isClassSelected = false;
        this.isCustomClassSelected = false;
        this.isCollectionSelected = false;
        break;
      case "Class":
        this.isFileValid = false;
        this.isClassSelected = true;
        this.isCollectionSelected = false;
        break;
    }
  }

  setClass(availableClass: string) {
    this.data!.serializationClass = availableClass;
    switch (availableClass) {
      case "Custom class":
        this.isCustomClassSelected = true;
        break;
      default:
        this.isCustomClassSelected = false;
    }
  }

  handleFileInput($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.fileToUpload = (target.files as FileList)[0];
    if(this.fileToUpload!=null)
      this.isFileValid = true;
  }

  isDatabaseConfigurationValid() {
    if (!(this.databaseNameFormControl.valid && this.databasePathFormControl.valid))
      return false;
    if(this.sshConnection)
      if(!this.sshHostFormControl.valid)
        return false;
    if (this.data!.serializationType === "Gson")
      return this.serializationTypeFormControl.valid
    else if (this.data!.serializationType === "Collection") {
      if (!this.collectionTypeFormControl.valid)
        return false;
    } else {
      if (!this.selectedClassFormControl.valid)
        return false;
    }
    if (this.data!.serializationClass == "Custom class")
        return this.isFileValid
    return true;
  }

  setCollectionType(collectionType: string) {
    this.data!.collectionType = collectionType;
  }
}
