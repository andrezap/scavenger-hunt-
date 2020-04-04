import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeRoutePageRoutingModule } from './change-route-routing.module';

import { ChangeRoutePage } from './change-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeRoutePageRoutingModule
  ],
  declarations: [ChangeRoutePage]
})
export class ChangeRoutePageModule {}
