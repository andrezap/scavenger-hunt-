import {NgModule} from '@angular/core';
import {QuestionComponent} from './question/question.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {QuestionTextAlternativeComponent} from './question-text-alternative/question-text-alternative.component';

@NgModule({
    declarations: [QuestionComponent, QuestionTextAlternativeComponent],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [QuestionComponent, QuestionTextAlternativeComponent]
})

export class ComponentsModule {
}
