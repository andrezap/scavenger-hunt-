import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Q19Page } from './q19.page';

const routes: Routes = [
  {
    path: '',
    component: Q19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q19PageRoutingModule {}
