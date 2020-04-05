import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../shared/images/image.service';
import {CorrectnessService} from '../../shared/questions/correctness.service';
import {Router} from '@angular/router';
import {PointsService} from '../../shared/point/points.service';

@Component({
    selector: 'app-q10',
    templateUrl: './q10.page.html',
    styleUrls: ['./q10.page.scss'],
})
export class Q10Page implements OnInit {

    private street = 'WEST HILL ST. - MULT. CHOICE';
    private question = 'q10';
    private nextQuestion = 'q11';
    private sentence = 'True or False – Graycliff is home to the ruins of the oldest church built in the Bahamas and houses up to 250,000 bottles of wine?';
    private quantityOfImages = 2;

    private NOT_FOUND = -1;
    private imgs = [];

    private correctAnswers = [];
    public clickedAnswers = [];

    constructor(
        private imageService: ImageService,
        private correctnessService: CorrectnessService,
        public router: Router,
        private pointsService: PointsService
    ) {
    }

    ngOnInit() {
        this.imgs = this.imageService.images(this.question, this.quantityOfImages);
        this.correctAnswers = this.correctnessService.correctAnswer(this.question);
    }

    ionViewDidEnter() {
        this.clickedAnswers = [];
    }

    public clickAnswer(index: number): void {
        if (!this.clicked(index)) {
            this.clickedAnswers.push(index);

            if (this.isCorrect(index)) {
                this.pointsService.countRightAnswer();
            } else {
                this.pointsService.countWrongAnswer();
            }
        }
    }

    public isCorrect(index: number): boolean {
        return this.correctAnswers.indexOf(index) !== this.NOT_FOUND;
    }

    public clicked(index: number): boolean {
        return this.clickedAnswers.indexOf(index) !== this.NOT_FOUND;
    }

    public color(index: number): string {
        if (this.clicked(index)) {
            if (this.isCorrect(index)) {
                return 'success';
            } else {
                return 'danger';
            }
        }
        return '';
    }

    public goToNextQuestion(): void {
        const page = '/' + this.nextQuestion;
        this.router.navigate([page]);
    }
}
