import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q5PageRoutingModule } from './q5-routing.module';

import { Q5Page } from './q5.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q5PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q5Page]
})
export class Q5PageModule {}
