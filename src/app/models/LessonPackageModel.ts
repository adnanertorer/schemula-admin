import { ParticipantTypeModel } from "./ParticipantTypeModel";

export class LessonPackageModel {
    _id!: string;
    lesson_id!: string;
    participant_type_id!: string;
    package_name!: string;
    seance_count!: number;
    seance_price!: number;
    package_price!: number;
    discount: number | undefined;
    description: string | undefined;
    max_capacity: number | undefined;
    is_active!: boolean;
    participant_type: ParticipantTypeModel | undefined;
}
