import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValdiationPipe implements PipeTransform {
    readonly allow = [
        TaskStatus.OPEN,
        TaskStatus.INPROGRESS,
        TaskStatus.DONE,
    ];
    
    transform(value : any) {
        value = value.toUpperCase();
        if (!this.isValid(value)) {
            throw new BadRequestException(`"${value}" is invalid status`);
        }
        return value;
    }
    
    private isValid(status : any) : boolean {
        return this.allow.indexOf(status) !== -1;
    }
}