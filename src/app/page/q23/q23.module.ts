import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q23PageRoutingModule } from './q23-routing.module';

import { Q23Page } from './q23.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q23PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q23Page]
})
export class Q23PageModule {}
