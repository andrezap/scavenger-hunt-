import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q8PageRoutingModule } from './q8-routing.module';

import { Q8Page } from './q8.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q8PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q8Page]
})
export class Q8PageModule {}
