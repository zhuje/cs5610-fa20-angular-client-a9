import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../services/CourseServiceClient';
import {ModuleServiceClient} from '../../services/ModuleServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courseId = '';
  course;
  courses = [];
  modules = [];
  lessons = [];
  topics = [];
  selectedCourse = {
    title: ''
  };

  createCourse = () =>
    this.courseService.createCourse()
      .then(course => this.courses.push(course))

  deleteCourse = (course) =>
    this.courseService.deleteCourse(course._id)
      .then(status => this.courses = this.courses.filter(c => c._id !== course._id))

  editCourse = (course) =>
    course.editing = true

  saveCourse = (course) => {
    course.editing = false;
    this.courseService.updateCourse(course);
  }

  selectCourse = (course) => {
    this.selectedCourse = course;
    this.moduleService.findModulesForCourse(course._id)
      .then(modules => this.modules = modules);
  }

  createModuleForCourse = (selectedCourse) =>
    this.moduleService.createModuleForCourse(selectedCourse._id)
      .then(module => this.modules.push(module))

  deleteModule = (module) =>
    this.moduleService.deleteModules(module._id)
      .then(status => this.modules = this.modules.filter(m => m._id !== module._id))

  saveModule = (module) =>
    this.moduleService.updateModule(module)
      .then(status => this.modules = this.modules.map(m => m._id === module._id ? module : m))

  constructor(private courseService: CourseServiceClient,
              private moduleService: ModuleServiceClient,
              private activeRoute: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.courseId = params.cid;
    });

    this.courseService.findCourseById(this.courseId)
      .then(course => this.course = course);

    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
