import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q22Page } from './q22.page';

const routes: Routes = [
  {
    path: '',
    component: Q22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q22PageRoutingModule {}
