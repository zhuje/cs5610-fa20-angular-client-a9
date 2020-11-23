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
  quizzes = [
    // {
    //   _id: '123',
    //   title: 'quiz 1'
    // },
    // {
    //   _id: '234',
    //   title: 'quiz 2'
    // },
    // {
    //   _id: '345',
    //   title: 'quiz 3'
    // }
  ];

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
