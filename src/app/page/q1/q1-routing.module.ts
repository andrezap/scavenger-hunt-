import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Q1Page} from './q1.page';

const routes: Routes = [
    {
        path: '',
        component: Q1Page
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Q1PageRoutingModule {
}
