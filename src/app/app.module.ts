import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatabaseSelectionComponent} from './components/databse-selection/database-selection.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing-module";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {
  CreateDatabaseConfigurationDialogComponent
} from './components/databse-selection/create-databse-configuration-dailog/create-database-configuration-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {ToastrModule} from "ngx-toastr";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DatabaseViewComponent} from './components/database-view/database-view.component';
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatExpansionModule} from "@angular/material/expansion";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import { DatabaseSingleObjectViewComponent } from './components/database-view/database-single-object-view/database-single-object-view.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    AppComponent,
    DatabaseSelectionComponent,
    CreateDatabaseConfigurationDialogComponent,
    DatabaseViewComponent,
    DatabaseSingleObjectViewComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterOutlet,
        AppRoutingModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatDialogModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        HttpClientModule,
        MatSelectModule,
        MatTableModule,
        MatExpansionModule,
        NgxJsonViewerModule,
        MatSlideToggleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
