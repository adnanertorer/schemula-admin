import { Component, OnInit } from '@angular/core';
import { LessonModel } from 'src/app/models/LessonModel';
import { LessonService } from 'src/app/lessons/lesson.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css'],
  providers: [LessonService]
})
export class CreateLessonComponent implements OnInit {

  lesson: LessonModel | undefined;
  lessons: LessonModel[] = [];
  buttonText: string = '';
  changeButtonVisibility = false;
  constructor(private lessonService: LessonService, private router: Router) { }

  ngOnInit() {
    this.lesson = {
      _id: '',
      is_active: true,
      lesson_name: '',
      lesson_photo: ''
    };
    this.buttonText = 'Kaydet';
    this.changeButtonVisibility = false;
    this.getList();
  }

  create() {
    this.lessonService.create(this.lesson!).subscribe((data)=>{
      if(data.success){
        this.ngOnInit();
      }
    }, (err)=>{
      console.log(err);
    });
  }

  getList(){
    this.lessonService.getList().subscribe((data)=>{
      this.lessons = data.data as LessonModel[];
    });
  }

  getById(id: string){
    this.lessonService.getById(id).subscribe((data)=>{
      this.lesson = data.data as LessonModel;
      this.buttonText = 'Değiştir';
      this.changeButtonVisibility = true;
    });
  }

  remove(id: string){
    this.lessonService.delete(id).subscribe((data)=>{
      this.ngOnInit();
    });
  }

  resetForm(){
    this.ngOnInit();
  }

  openPackages(id: string){
    this.router.navigate(['/lesson-packages', id]);
  }

}
