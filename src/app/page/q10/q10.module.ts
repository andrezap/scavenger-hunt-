import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q10PageRoutingModule } from './q10-routing.module';

import { Q10Page } from './q10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q10PageRoutingModule
  ],
  declarations: [Q10Page]
})
export class Q10PageModule {}
