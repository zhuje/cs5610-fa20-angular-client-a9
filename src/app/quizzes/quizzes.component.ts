import {Component, OnInit} from '@angular/core';
import {QuizzesServiceClient} from '../../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  courseId = '';
  quizzes = [];

  constructor(private quizService: QuizzesServiceClient,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      if (typeof this.courseId !== 'undefined') {
        this.quizService.findAllQuizzes()
          .then(quizzes => this.quizzes = quizzes);
      }
    });
  }

}
