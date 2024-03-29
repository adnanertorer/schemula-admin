import { PaymentTypeModel } from "./PaymentTypeModel";
import { StaffTypeModel } from "./StaffTypeModel";

export class StaffModel {
    _id!: string;
    name!: string;
    surname!: string;
    identity_number!: string;
    email!: string;
    gsm!: string;
    address!: string;
    work_start_date! : Date;
    work_finish_date: Date | undefined;
    birthday: Date | undefined;
    payment_type_id!: string;
    payment_type!: PaymentTypeModel;
    staff_type!: StaffTypeModel;
    is_active!: boolean;
}
