import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q21PageRoutingModule } from './q21-routing.module';

import { Q21Page } from './q21.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Q21PageRoutingModule,
        ComponentsModule
    ],
  declarations: [Q21Page]
})
export class Q21PageModule {}
