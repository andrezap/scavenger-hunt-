import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q2PageRoutingModule } from './q2-routing.module';

import { Q2Page } from './q2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q2PageRoutingModule
  ],
  declarations: [Q2Page]
})
export class Q2PageModule {}
