import { Component, OnInit } from '@angular/core';
import {QuestionsServiceClient} from '../../services/question.service.client';
import {ActivatedRoute} from '@angular/router';
import {QuizzesServiceClient} from '../../services/quiz.service.client';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  // constructor() { }
  //
  // ngOnInit(): void {
  // }
  questions = [];
  quizId = {};
  quiz;

  constructor(private svc: QuestionsServiceClient,
              private route: ActivatedRoute,
              private quizService: QuizzesServiceClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;

      this.svc.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
      this.quizService.findQuizById(this.quizId)
        .then(quiz => this.quiz = quiz)
    })
  }

}
