import {Injectable} from '@angular/core';

const moduleUrl = 'https://wbdv-generic-server.herokuapp.com/api/zhujen/modules';
const lessonUrl = 'https://wbdv-generic-server.herokuapp.com/api/zhujen/lessons';


@Injectable()
export class LessonService {
  findLessonsForModules = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`)
      .then(response => response.json())

  deleteLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

  createLessonForModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Lesson'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  updateLesson = (lesson) =>
    fetch(`${lessonUrl}/${lesson._id}`, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

}
