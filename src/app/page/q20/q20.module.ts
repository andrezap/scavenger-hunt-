import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q20PageRoutingModule } from './q20-routing.module';

import { Q20Page } from './q20.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q20PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q20Page]
})
export class Q20PageModule {}
