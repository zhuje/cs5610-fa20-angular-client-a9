import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {
  findAllCourses = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/zhujen/courses`)
      .then(response => response.json())

  deleteCourse = (id) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/zhujen/courses/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

  createCourse = () =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/zhujen/courses`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Course', editing: false}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  updateCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/zhujen/courses/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
}
