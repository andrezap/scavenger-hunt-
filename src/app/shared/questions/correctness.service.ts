import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CorrectnessService {

    private answersQ1 = [0, 1, 2, 5];
    private answersQ2 = [1, 2, 4, 5];
    private answersQ3 = [0];
    private answersQ4 = [0, 3, 4, 5];
    private answersQ5 = [0, 1, 3, 4];
    private answersQ6 = [1];
    private answersQ7 = [0];
    private answersQ8 = [1, 3, 5];
    private answersQ9 = [0, 1, 2, 4];
    private answersQ10 = [0];
    private answersQ11 = [1, 2, 3, 4];
    private answersQ12 = [1];
    private answersQ13 = [0, 3];
    private answersQ14 = [2, 4];
    private answersQ15 = [1];
    private answersQ16 = [0, 1, 4, 5];
    private answersQ17 = [3, 4, 5];
    private answersQ18 = [0, 1, 3, 4, 5];
    private answersQ19 = [2];
    private answersQ20 = [0];
    private answersQ21 = [0, 1, 2, 4];
    private answersQ22 = [1];
    private answersQ23 = [0, 1, 2, 3, 4, 5];
    private answersQ24 = [1];

    constructor() {
    }

    public correctAnswer(question: string) {
        const answersToQuestion = {
            q1: this.answersQ1,
            q2: this.answersQ2,
            q3: this.answersQ3,
            q4: this.answersQ4,
            q5: this.answersQ5,
            q6: this.answersQ6,
            q7: this.answersQ7,
            q8: this.answersQ8,
            q9: this.answersQ9,
            q10: this.answersQ10,
            q11: this.answersQ11,
            q12: this.answersQ12,
            q13: this.answersQ13,
            q14: this.answersQ14,
            q15: this.answersQ15,
            q16: this.answersQ16,
            q17: this.answersQ17,
            q18: this.answersQ18,
            q19: this.answersQ19,
            q20: this.answersQ20,
            q21: this.answersQ21,
            q22: this.answersQ22,
            q23: this.answersQ23,
            q24: this.answersQ24,
        };

        return answersToQuestion[question];
    }
}
