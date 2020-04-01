import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {Q1PageRoutingModule} from './q1-routing.module';

import {Q1Page} from './q1.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        Q1PageRoutingModule
    ],
    declarations: [Q1Page]
})
export class Q1PageModule {
}
