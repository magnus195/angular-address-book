import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "../pages/contacts/list/list.component";
import {AddComponent} from "../pages/contacts/add/add.component";
import {ViewComponent} from "../pages/contacts/view/view.component";
import {EditComponent} from "../pages/contacts/edit/edit.component";

const routes: Routes = [
    { path: 'contacts', component: ListComponent },
    { path: 'contacts/add', component: AddComponent },
    { path: 'contacts/:id', component: ViewComponent },
    { path: 'contacts/:id/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
