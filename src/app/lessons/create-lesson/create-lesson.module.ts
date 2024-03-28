import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLessonComponent } from './create-lesson.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Yeni Ders Kaydı",
      urls: [{ title: "Yeni Ders Kaydı", url: "/lesson-create" }, { title: "Yeni Ders Kaydı" }],
    },
    component: CreateLessonComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class CreateLessonModule { }
