import {Component, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {EventEmitter} from 'events';


@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  grading = false;
  faCheck = faCheck;
  faTimes = faTimes;

  constructor() { }

  @Input()
  question = {
    _id: '',
    title: '',
    question: '',
    choices: [],
    correct: '',
    selectedAnswer: ''
  };
  @Input()
  answer = '';

  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = () => {
    this.answerChange.emit(this.answer)
  }


  grade = () => {
    this.grading = true;
  };


  ngOnInit(): void {
  }
}
