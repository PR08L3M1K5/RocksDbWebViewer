import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatabaseSelectionComponent} from "./components/databse-selection/database-selection.component";
import {DatabaseViewComponent} from "./components/database-view/database-view.component";


const routes: Routes = [
  { path: '', component: DatabaseSelectionComponent },
  { path: 'database-view/:databaseName', component: DatabaseViewComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
