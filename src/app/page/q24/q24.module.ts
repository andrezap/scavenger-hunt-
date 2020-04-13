import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q24PageRoutingModule } from './q24-routing.module';

import { Q24Page } from './q24.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q24PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q24Page]
})
export class Q24PageModule {}
