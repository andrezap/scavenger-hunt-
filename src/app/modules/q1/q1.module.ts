import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q1PageRoutingModule } from './q1-routing.module';

import { Q1Page } from './q1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q1PageRoutingModule
  ],
  declarations: [Q1Page]
})
export class Q1PageModule {}
