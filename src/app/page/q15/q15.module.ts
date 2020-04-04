import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q15PageRoutingModule } from './q15-routing.module';

import { Q15Page } from './q15.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q15PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q15Page]
})
export class Q15PageModule {}
