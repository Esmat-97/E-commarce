import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmessagesPage } from './addmessages.page';

const routes: Routes = [
  {
    path: '',
    component: AddmessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmessagesPageRoutingModule {}
