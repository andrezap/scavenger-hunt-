import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q4PageRoutingModule } from './q4-routing.module';

import { Q4Page } from './q4.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q4PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q4Page]
})
export class Q4PageModule {}
