import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../../services/ModuleService';
import {LessonService} from '../../services/LessonService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  lessons = [];
  lessonId = '';
  moduleId = '';
  courseId = '';

  constructor(private lessonService: LessonService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.lessonId = params.lid;
      if (typeof this.moduleId !== 'undefined') {
        this.lessonService.findLessonsForModules(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    });
  }

  createLessonForModule = (moduleId) =>
    this.lessonService.createLessonForModule(moduleId)
      .then(lesson => this.lessons.push(lesson))

  deleteLesson = (lesson) =>
    this.lessonService.deleteLesson(lesson._id)
      .then(status => this.lessons = this.lessons.filter(l => l._id !== lesson._id))

  editLesson = (lesson) =>
    lesson.editing = true

  saveLesson = (lesson) => {
    lesson.editing = false;
    this.lessonService.updateLesson(lesson);
    // .then(status => this.modules = this.modules.map(m => m._id === module._id ? module : m))
  }

}
