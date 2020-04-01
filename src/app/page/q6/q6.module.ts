import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q6PageRoutingModule } from './q6-routing.module';

import { Q6Page } from './q6.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q6PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q6Page]
})
export class Q6PageModule {}
