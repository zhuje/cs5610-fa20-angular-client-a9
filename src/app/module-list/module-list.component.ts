import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../services/ModuleService';
import {CourseService} from '../../services/course-service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules = [];
  moduleId = '';
  courseId = '';

  constructor(private moduleService: ModuleService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.courseId = params.cid;
      this.moduleId = params.mid;
      if (typeof this.courseId !== 'undefined') {
        this.moduleService.findModulesForCourse(this.courseId)
          .then(modules => this.modules = modules);
      }
    });
  }

  createModuleForCourse = (courseId) =>
    this.moduleService.createModuleForCourse(courseId)
      .then(module => this.modules.push(module))

  deleteModule = (module) =>
    this.moduleService.deleteModules(module._id)
      .then(status => this.modules = this.modules.filter(m => m._id !== module._id))

  editModule = (module) =>
    module.editing = true

  saveModule = (module) => {
    module.editing = false;
    this.moduleService.updateModule(module);
      // .then(status => this.modules = this.modules.map(m => m._id === module._id ? module : m))
  }


}
