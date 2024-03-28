import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonPackageComponent } from './lesson-package.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Paket Tanımları",
      urls: [{ title: "Paket Tanımları", url: "/lesson-packages/:id" }, { title: "Paket Tanımları" }],
    },
    component: LessonPackageComponent,
  },
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LessonPackageComponent]
})
export class LessonPackageModule { }
