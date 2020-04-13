import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q17PageRoutingModule } from './q17-routing.module';

import { Q17Page } from './q17.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q17PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q17Page]
})
export class Q17PageModule {}
