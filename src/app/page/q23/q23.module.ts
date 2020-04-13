import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q23PageRoutingModule } from './q23-routing.module';

import { Q23Page } from './q23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q23PageRoutingModule
  ],
  declarations: [Q23Page]
})
export class Q23PageModule {}
