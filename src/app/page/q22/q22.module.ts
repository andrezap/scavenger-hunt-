import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q22PageRoutingModule } from './q22-routing.module';

import { Q22Page } from './q22.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q22PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q22Page]
})
export class Q22PageModule {}
