import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q14PageRoutingModule } from './q14-routing.module';

import { Q14Page } from './q14.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q14PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q14Page]
})
export class Q14PageModule {}
