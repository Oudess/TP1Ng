import { Routes } from '@angular/router';
import { TtcComponent } from './ttc/ttc.component';
import { CvComponent } from './cv/cv.component';
import { TodoComponent } from './todo/todo.component';
import { WeekTodoComponent } from './week-todo/week-todo.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { ColorComponent } from './color/color.component';
import { RainbowDemoComponent } from './rainbow/rainbow-demo.component';

export const routes: Routes = [
  { path: '', component: TtcComponent },
  { path: 'cv', component: CvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'week-todo', component: WeekTodoComponent },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'color', component: ColorComponent },
  { path: 'rainbow', component: RainbowDemoComponent },
  { path: '**', redirectTo: '' },
];