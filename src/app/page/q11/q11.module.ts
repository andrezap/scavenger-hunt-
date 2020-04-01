import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q11PageRoutingModule } from './q11-routing.module';

import { Q11Page } from './q11.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q11PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q11Page]
})
export class Q11PageModule {}
