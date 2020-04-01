import {Component} from '@angular/core';
import {QuestionComponent} from 'src/app/components/question/question.component';

@Component({
    selector: 'app-q1',
    templateUrl: './q1.page.html',
    styleUrls: ['./q1.page.scss'],
})
export class Q1Page extends QuestionComponent {

    private streetName = 'PARLIMENT ST. #1';
    private questionNumber = 'q1';
    private nextQuestionNumber = 'q2';
}
