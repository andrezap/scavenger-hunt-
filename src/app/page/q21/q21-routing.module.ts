import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q21Page } from './q21.page';

const routes: Routes = [
  {
    path: '',
    component: Q21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q21PageRoutingModule {}
