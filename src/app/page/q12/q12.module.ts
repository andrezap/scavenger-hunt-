import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q12PageRoutingModule } from './q12-routing.module';

import { Q12Page } from './q12.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q12PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Q12Page]
})
export class Q12PageModule {}
