
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task-status.enum';
export class GetTaskFilterDTO {
    
    @IsOptional()
    @IsIn([TaskStatus.OPEN, TaskStatus.INPROGRESS, TaskStatus.DONE])
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search : string;
}