import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {CourseListComponent} from './course-list/course-list.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component: CourseListComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/:cid/modules', component: CourseNavigatorComponent},
  {path: 'courses/:cid/modules/:mid/lessons', component: CourseNavigatorComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseNavigatorComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid/widgets', component: CourseNavigatorComponent},

  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
