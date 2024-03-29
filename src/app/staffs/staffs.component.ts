import { Component, OnInit } from '@angular/core';
import { StaffService } from './staff.service';
import { StaffTypeService } from './staff-type.service';
import { PaymentTypeService } from '../services/payment-type.service';
import { StaffModel } from '../models/StaffModel';
import { StaffTypeModel } from '../models/StaffTypeModel';
import { PaymentTypeModel } from '../models/PaymentTypeModel';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {
  model: StaffModel | undefined;
  modelList: StaffModel[] = [];
  staffTypeList: StaffTypeModel[] = [];
  paymentTypeList: PaymentTypeModel[] = [];
  buttonText: string = '';
  changeButtonVisibility = false;

  constructor(private staffService: StaffService, private staffTypeService: StaffTypeService, private paymentTypeService: PaymentTypeService) { }

  ngOnInit() {
    this.model = {
      _id: '',
      address: '',
      birthday: undefined,
      email: '',
      gsm: '',
      identity_number: '',
      is_active: true,
      name: '',
      payment_type: {
        is_active: true,
        payment_type: '',
        _id: '',
      },
      payment_type_id: '',
      staff_type: {
        is_active: true,
        staff_type_name: '',
        _id: '',
      },
      surname: '',
      work_finish_date: undefined,
      work_start_date: new Date()
    };
    this.buttonText = 'Kaydet';
    this.changeButtonVisibility = false;
    this.getStaffTypes();
    this.getPaymentTypes();
    this.getList();
  }

  getStaffTypes(){
    this.staffTypeService.getList().subscribe((data)=>{
      this.staffTypeList = data.data as StaffTypeModel[];
    });
  }

  getPaymentTypes(){
    this.paymentTypeService.getList().subscribe((data)=>{
      this.paymentTypeList = data.data as PaymentTypeModel[];
    })
  }
  
  create() {
    this.staffService.create(this.model!).subscribe((data)=>{
      if(data.success){
        this.ngOnInit();
      }
    }, (err)=>{
    });
  }

  getList(){
    this.staffService.getList().subscribe((data)=>{
      this.modelList = data.data as StaffModel[];
    });
  }

  getById(id: string){
    this.staffService.getById(id).subscribe((data)=>{
      this.model = data.data as StaffModel;
      this.buttonText = 'Değiştir';
      this.changeButtonVisibility = true;
    });
  }

  remove(id: string){
    this.staffService.delete(id).subscribe((data)=>{
      this.ngOnInit();
    });
  }

  resetForm(){
    this.ngOnInit();
  }

  setStaffType(event: any){
    this.staffTypeService.getById(event.target.value).subscribe((data)=>{
      if(data.success){
        this.model!.staff_type = data.data as StaffTypeModel;
      }
    })
  }

  setPaymentType(event: any){
    this.model!.payment_type_id = event.target.value;
    this.paymentTypeService.getById(event.target.value).subscribe((data)=>{
      if(data.success){
        this.model!.payment_type = data.data as PaymentTypeModel;
      }
    })
  }

}
