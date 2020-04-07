import {Component, Input} from '@angular/core';
import {QuestionComponent} from '../question/question.component';

@Component({
    selector: 'app-question-text-alternative',
    templateUrl: './question-text-alternative.component.html',
    styleUrls: ['./question-text-alternative.component.scss'],
})
export class QuestionTextAlternativeComponent extends QuestionComponent {

    @Input() alternatives: Array<string>;
}
