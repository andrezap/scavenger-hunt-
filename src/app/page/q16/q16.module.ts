import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q16PageRoutingModule } from './q16-routing.module';

import { Q16Page } from './q16.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q16PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q16Page]
})
export class Q16PageModule {}
