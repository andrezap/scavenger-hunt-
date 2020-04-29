import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageService} from '../../shared/images/image.service';
import {CorrectnessService} from '../../shared/questions/correctness.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {PointsService} from '../../shared/point/points.service';
import {RouteService} from '../../shared/route/route.service';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

    @Input() street: string;
    @Input() question: string;
    @Input() nextQuestion: string;
    @Input() quantityOfImages: number;
    @Input() sentence = null;
    @Input() size = 4;

    @Output() clickedAnswerEvent = new EventEmitter<boolean>();

    private NOT_FOUND = -1;
    private imgs = [];

    private correctAnswers = [];
    public clickedAnswers = [];

    constructor(
        private imageService: ImageService,
        private correctnessService: CorrectnessService,
        public router: Router,
        private pointsService: PointsService,
        public routeService: RouteService,
        public activeRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.imgs = this.imageService.images(this.question, this.quantityOfImages);
        this.correctAnswers = this.correctnessService.correctAnswer(this.question);
    }

    public clickAnswer(index: number): void {
        if (!this.clicked(index)) {
            this.clickedAnswers.push(index);
            this.clickedAnswerEvent.emit(true);

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
        const navigationExtras: NavigationExtras = {
            queryParams: {
                lastPage: this.question
            }
        };

        const page = '/' + this.nextQuestion;
        this.router.navigate([page], navigationExtras);
    }
}
