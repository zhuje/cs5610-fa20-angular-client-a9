import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})

export class TrueFalseQuestionComponent implements OnInit {


  constructor() {
    // Selecting Default Radio item here
    this.getSelecteditem();
  }

  // constructor() {
  // }

  grading = false;
  faCheck = faCheck;
  faTimes = faTimes;

  title = 'app';
  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  // itemsList: Item[] = ITEMS;
  choices = ['True', 'False'];



  @Input()
  question = {
    _id: '',
    title: '',
    question: '',
    answer: '',
    correct: '',
    selected: false,
  };

  // Get row item from array
  getSelecteditem(){
    this.radioSel = this.choices.find(choice => choice === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }
  // Radio Change Event
  onItemChange(item){
    this.getSelecteditem();
  }


  grade = () => {
    this.grading = true;
  };






  ngOnInit(): void {
  }

}
