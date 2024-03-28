import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';
import { LessonPackageModel } from 'src/app/models/LessonPackageModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantTypeModel } from 'src/app/models/ParticipantTypeModel';
import { ParticipantTypeService } from 'src/app/participant-types/participant-type.service';
import { LessonModel } from 'src/app/models/LessonModel';

@Component({
  selector: 'app-lesson-package',
  templateUrl: './lesson-package.component.html',
  styleUrls: ['./lesson-package.component.css'],
  providers: [LessonService, ParticipantTypeService]
})
export class LessonPackageComponent implements OnInit {

  lessonPackage: LessonPackageModel | undefined;
  lessonPackageList: LessonPackageModel[] = [];
  currentLesson: LessonModel | undefined;
  participantTypes: ParticipantTypeModel[] = [];
  currentParticipantType: ParticipantTypeModel | undefined;
  buttonText: string = '';
  changeButtonVisibility = false;
  lessonId: string = '';

  constructor(private service: LessonService, private participantService: ParticipantTypeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.buttonText = 'Kaydet';
    this.changeButtonVisibility = false;
    this.activatedRoute.params.subscribe(params => {
      this.lessonId = params["id"];
      
      this.currentParticipantType= {
        _id: '',
        is_active: true,
        participant_type_name: ''
      };

      this.lessonPackage = {
        _id: '',
        description: '',
        discount: 0,
        is_active: true,
        lesson_id: this.lessonId,
        max_capacity: 0,
        package_name: '',
        package_price: 0,
        participant_type_id: '',
        seance_count: 0,
        seance_price: 0,
        participant_type: this.currentParticipantType
      };
      
      this.getLesson(this.lessonId);
      this.getParticipantTypes();
      this.getListByLessonId();
    });

    

    this.currentLesson = {
      _id: '',
      is_active: false,
      lesson_name: '',
      lesson_photo: '',
    };

    
  }

  getLesson(id: string) {
    this.service.getById(id).subscribe((data)=>{
      if(data.success){
        this.currentLesson = data.data as LessonModel
      }
    });
  }

  getParticipantTypes(){
    this.participantService.getList().subscribe((data)=>{
      if(data.success){
        this.participantTypes = data.data as ParticipantTypeModel[];
      }
    })
  }

  create() {
    this.service.createPackage(this.lessonPackage!).subscribe((data)=>{
      if(data.success){
        this.ngOnInit();
      }
    }, (err)=>{
      console.log(err);
    });
  }

  getList(){
    this.service.getPackageList().subscribe((data)=>{
      this.lessonPackageList = data.data as LessonPackageModel[];
    });
  }

  getListByLessonId(){
    this.service.getPackageListByLessonId(this.lessonId).subscribe((data)=>{
      this.lessonPackageList = data.data as LessonPackageModel[];
    });
  }

  getById(id: string){
    this.service.getByIdPackage(id).subscribe((data)=>{
      this.lessonPackage = data.data as LessonPackageModel;
      this.buttonText = 'Değiştir';
      this.changeButtonVisibility = true;
    });
  }

  remove(id: string){
    this.service.deletePackage(id).subscribe((data)=>{
      this.ngOnInit();
    });
  }

  resetForm(){
    this.ngOnInit();
  }

  setPriceWithSeanceCount(event:any){
    const price = this.lessonPackage!.seance_count * event.target.value;
    this.lessonPackage!.package_price = price;
  }

  setDiscount(event:any){
    const discount = this.lessonPackage!.package_price * event.target.value / 100;
    this.lessonPackage!.package_price = this.lessonPackage!.package_price - discount;
  }

  setParticipantTypeId(event: any){
    console.log(event.target.value);
    this.participantService.getById(event.target.value).subscribe((data)=>{
      if(data.success){
        this.lessonPackage!.participant_type = data.data as ParticipantTypeModel;
      }
    })
  }

}
