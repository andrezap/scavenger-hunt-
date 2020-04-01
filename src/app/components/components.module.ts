import {NgModule} from '@angular/core';
import {QuestionComponent} from './question/question.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [QuestionComponent],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [QuestionComponent]
})

export class ComponentsModule {}
