import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q13PageRoutingModule } from './q13-routing.module';

import { Q13Page } from './q13.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q13PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q13Page]
})
export class Q13PageModule {}
