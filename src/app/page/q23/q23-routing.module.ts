import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q23Page } from './q23.page';

const routes: Routes = [
  {
    path: '',
    component: Q23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q23PageRoutingModule {}
