import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomePageModule)},
    {
        path: 'q1',
        loadChildren: () => import('./page/q1/q1.module').then(m => m.Q1PageModule)
    },
    {
        path: 'q2',
        loadChildren: () => import('./page/q2/q2.module').then(m => m.Q2PageModule)
    },
    {
        path: 'q3',
        loadChildren: () => import('./page/q3/q3.module').then(m => m.Q3PageModule)
    },
    {
        path: 'q4',
        loadChildren: () => import('./page/q4/q4.module').then(m => m.Q4PageModule)
    },
    {
        path: 'q5',
        loadChildren: () => import('./page/q5/q5.module').then(m => m.Q5PageModule)
    },
    {
        path: 'q6',
        loadChildren: () => import('./page/q6/q6.module').then(m => m.Q6PageModule)
    },
    {
        path: 'q7',
        loadChildren: () => import('./page/q7/q7.module').then(m => m.Q7PageModule)
    },
    {
        path: 'q8',
        loadChildren: () => import('./page/q8/q8.module').then(m => m.Q8PageModule)
    },
    {
        path: 'q9',
        loadChildren: () => import('./page/q9/q9.module').then(m => m.Q9PageModule)
    },
    {
        path: 'q10',
        loadChildren: () => import('./page/q10/q10.module').then(m => m.Q10PageModule)
    },
    {
        path: 'q11',
        loadChildren: () => import('./page/q11/q11.module').then(m => m.Q11PageModule)
    },
    {
        path: 'q12',
        loadChildren: () => import('./page/q12/q12.module').then(m => m.Q12PageModule)
    },
    {
        path: 'q13',
        loadChildren: () => import('./page/q13/q13.module').then(m => m.Q13PageModule)
    },
    {
        path: 'q14',
        loadChildren: () => import('./page/q14/q14.module').then(m => m.Q14PageModule)
    },
    {
        path: 'q15',
        loadChildren: () => import('./page/q15/q15.module').then(m => m.Q15PageModule)
    },
    {
        path: 'q16',
        loadChildren: () => import('./page/q16/q16.module').then(m => m.Q16PageModule)
    },
    {
        path: 'q17',
        loadChildren: () => import('./page/q17/q17.module').then(m => m.Q17PageModule)
    },
    {
        path: 'q18',
        loadChildren: () => import('./page/q18/q18.module').then(m => m.Q18PageModule)
    },
    {
        path: 'q19',
        loadChildren: () => import('./page/q19/q19.module').then(m => m.Q19PageModule)
    },
    {
        path: 'q20',
        loadChildren: () => import('./page/q20/q20.module').then(m => m.Q20PageModule)
    },
    {
        path: 'q21',
        loadChildren: () => import('./page/q21/q21.module').then(m => m.Q21PageModule)
    },
    {
        path: 'q22',
        loadChildren: () => import('./page/q22/q22.module').then(m => m.Q22PageModule)
    },
    {
        path: 'q23',
        loadChildren: () => import('./page/q23/q23.module').then(m => m.Q23PageModule)
    },
    {
        path: 'q24',
        loadChildren: () => import('./page/q24/q24.module').then(m => m.Q24PageModule)
    },
    {
        path: 'q25',
        loadChildren: () => import('./page/q25/q25.module').then(m => m.Q25PageModule)
    },
    {
        path: 'ranking',
        loadChildren: () => import('./page/ranking/ranking.module').then(m => m.RankingPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
