import {Component, OnInit} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q21',
    templateUrl: './q21.page.html',
    styleUrls: ['./q21.page.scss'],
})
export class Q21Page extends QuestionComponent implements OnInit {

    private streetName = 'WEST BAY ST. #2';
    private questionNumber = 'q21';
    private nextQuestionNumber = 'q22';
}
