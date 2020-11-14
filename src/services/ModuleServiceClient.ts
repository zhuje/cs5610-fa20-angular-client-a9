import {Injectable} from '@angular/core';

const courseUrl = 'https://wbdv-generic-server.herokuapp.com/api/zhujen/courses';
const moduleUrl = 'https://wbdv-generic-server.herokuapp.com/api/zhujen/modules';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (courseId) =>
    fetch(`${courseUrl}/${courseId}/modules`)
      .then(response => response.json())

  deleteModules = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

  createModuleForCourse = (courseId) =>
    fetch(`${courseUrl}/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Module'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  updateModule = (module) =>
    fetch(`${moduleUrl}/${module.id}`, {
      method: 'PUT',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

}
