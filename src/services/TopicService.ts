import {Injectable} from '@angular/core';

// parentComponent
const lessonUrl = 'https://wbdv-generic-server.herokuapp.com/api/zhujen/lessons';
// childComponent
const topicUrl = 'https://wbdv-generic-server.herokuapp.com/api/zhujen/topics';

@Injectable()
export class TopicService {
  findTopicsForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
      .then(response => response.json())

  deleteTopic = (topicId) =>
    fetch(`${topicUrl}/${topicId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())

  createTopicForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Topic'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  updateTopic = (topic) =>
    fetch(`${topicUrl}/${topic._id}`, {
      method: 'PUT',
      body: JSON.stringify(topic),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

}
