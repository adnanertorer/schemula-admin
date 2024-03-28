import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantTypesComponent } from './participant-types.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Katılımcı Türü Tanımları",
      urls: [{ title: "Katılımcı Türü Tanımları", url: "/participant-types" }, { title: "Katılımcı Türü Tanımları" }],
    },
    component: ParticipantTypesComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ParticipantTypesComponent]
})
export class ParticipantTypesModule { }
