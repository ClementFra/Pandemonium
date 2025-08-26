import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions = [
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Atlantique', 'Pacifique', 'Indien', 'Arctique'],
      answer: 'Pacifique'
    },
    {
      question: 'Qui a peint la Joconde ?',
      options: ['Michel-Ange', 'Léonard de Vinci', 'Raphaël', 'Van Gogh'],
      answer: 'Léonard de Vinci'
    },
    {
      question: 'Combien de continents existe-t-il sur Terre ?',
      options: ['5', '6', '7', '8'],
      answer: '7'
    }
  ];

  private currentQuestionIndex = new BehaviorSubject<number>(0);
  private score = new BehaviorSubject<number>(0);

  getQuestions() {
    return this.questions;
  }

  getCurrentQuestionIndex() {
    return this.currentQuestionIndex.asObservable();
  }

  nextQuestion() {
    const newIndex = this.currentQuestionIndex.value + 1;
    if (newIndex < this.questions.length) {
      this.currentQuestionIndex.next(newIndex);
    }
  }

  incrementScore() {
    this.score.next(this.score.value + 1);
  }

  getScore() {
    return this.score.asObservable();
  }

  resetQuiz() {
    this.currentQuestionIndex.next(0);
    this.score.next(0);
  }
}
