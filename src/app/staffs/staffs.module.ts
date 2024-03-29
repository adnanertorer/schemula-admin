import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffsComponent } from './staffs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Personel Tanımları",
      urls: [{ title: "Personel Tanımları", url: "/staffs" }, { title: "Personel Tanımları" }],
    },
    component: StaffsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [StaffsComponent]
})
export class StaffsModule { }
