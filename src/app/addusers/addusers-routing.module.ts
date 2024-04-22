import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddusersPage } from './addusers.page';

const routes: Routes = [
  {
    path: '',
    component: AddusersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddusersPageRoutingModule {}
