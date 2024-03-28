import { Component, OnInit } from '@angular/core';
import { ParticipantTypeService } from './participant-type.service';
import { ParticipantTypeModel } from '../models/ParticipantTypeModel';

@Component({
  selector: 'app-participant-types',
  templateUrl: './participant-types.component.html',
  styleUrls: ['./participant-types.component.css'],
  providers: [ParticipantTypeService]
})
export class ParticipantTypesComponent implements OnInit {

  model: ParticipantTypeModel | undefined;
  modelList: ParticipantTypeModel[] = [];
  buttonText: string = '';
  changeButtonVisibility = false;
  constructor(private service: ParticipantTypeService) { }

  ngOnInit() {
    this.model = {
      _id: '',
      is_active: true,
      participant_type_name: ''
    };
    this.buttonText = 'Kaydet';
    this.changeButtonVisibility = false;
    this.getList();
  }

  create() {
    this.service.create(this.model!).subscribe((data)=>{
      if(data.success){
        this.ngOnInit();
      }
    }, (err)=>{
      console.log(err);
    });
  }

  getList(){
    this.service.getList().subscribe((data)=>{
      this.modelList = data.data as ParticipantTypeModel[];
    });
  }

  getById(id: string){
    this.service.getById(id).subscribe((data)=>{
      this.model = data.data as ParticipantTypeModel
      this.buttonText = 'Değiştir';
      this.changeButtonVisibility = true;
    });
  }

  remove(id: string){
    this.service.delete(id).subscribe((data)=>{
      this.ngOnInit();
    });
  }

  resetForm(){
    this.ngOnInit();
  }
}
