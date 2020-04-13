import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q24Page } from './q24.page';

const routes: Routes = [
  {
    path: '',
    component: Q24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q24PageRoutingModule {}
