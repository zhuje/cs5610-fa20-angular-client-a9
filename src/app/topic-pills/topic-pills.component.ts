import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../../services/ModuleServiceClient';
import {TopicServiceClient} from '../../services/TopicServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  topics = [];
  topicId = '';
  lessonId = '';
  moduleId = '';
  courseId = '';

  constructor(private topicService: TopicServiceClient,
              private activeRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.lessonId = params.lid;
      this.moduleId = params.mid;
      this.courseId = params.cid;
      this.topicId = params.tid;
      if (typeof this.lessonId !== 'undefined') {
        this.topicService.findTopicsForLesson(this.lessonId)
          .then(topics => this.topics = topics);
      }
    });
  }

  createTopicForLesson = (lessonId) =>
    this.topicService.createTopicForLesson(lessonId)
      .then(topic => this.topics.push(topic));

  deleteTopic = (topic) =>
    this.topicService.deleteTopic(topic._id)
      .then(status => this.topics = this.topics.filter(t => t._id !== topic._id))

  editTopic = (topic) =>
    topic.editing = true

  saveTopic = (topic) => {
    topic.editing = false;
    this.topicService.updateTopic(topic);
    // .then(status => this.modules = this.modules.map(m => m._id === module._id ? module : m))
  }





}
