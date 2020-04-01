import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from '../../shared/images/image.service';
import {CorrectnessService} from '../../shared/questions/correctness.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

    @Input() street: string;
    @Input() question: string;
    @Input() nextQuestion: string;

    private NOT_FOUND = -1;
    private imgs = [];

    private correctAnswers = [];
    private clickedAnswers = [];

    constructor(private imageService: ImageService, private correctnessService: CorrectnessService, public router: Router) {
    }

    ngOnInit() {
        this.imgs = this.imageService.images(this.question);
        this.correctAnswers = this.correctnessService.correctAnswer(this.question);
    }

    public clickAnswer(index: number): void {
        if (!this.clicked(index)) {
            this.clickedAnswers.push(index);
        }
    }

    public isCorrect(index: number): boolean {
        return this.correctAnswers.indexOf(index) !== this.NOT_FOUND;
    }

    public clicked(index: number): boolean {
        return this.clickedAnswers.indexOf(index) !== this.NOT_FOUND;
    }

    public color(index: number): string {
        if (this.clicked(index) && this.isCorrect(index)) {
            return 'secondary';
        }

        return '';
    }

    public goToNextQuestion(): void {
        this.router.navigate(['q2']);
    }
}
