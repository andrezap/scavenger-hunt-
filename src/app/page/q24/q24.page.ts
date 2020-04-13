import {Component, OnInit} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q24',
    templateUrl: './q24.page.html',
    styleUrls: ['./q24.page.scss'],
})
export class Q24Page extends QuestionComponent implements OnInit {

    private streetName = 'WEST BAY ST. #3';
    private questionNumber = 'q24';
    private nextQuestionNumber = 'ranking';
    private questionSentence = 'TAP the picture of the 3 billion dollar Chinese funded resort.';
    private qntOfImages = 2;
}
