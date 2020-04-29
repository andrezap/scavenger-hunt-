import {Component, OnInit} from '@angular/core';
import {QuestionComponent} from '../../components/question/question.component';

@Component({
    selector: 'app-q16',
    templateUrl: './q16.page.html',
    styleUrls: ['./q16.page.scss'],
})
export class Q16Page extends QuestionComponent implements OnInit {
    private streetName = 'CUMBERLAND ST.';
    private questionNumber = 'q16';
    private nextQuestionNumber = 'q17';
    private hideBackBtn = false;

    private receiveClickedEvent($event): boolean {
        this.hideBackBtn = $event;
        return this.hideBackBtn;
    }
}
