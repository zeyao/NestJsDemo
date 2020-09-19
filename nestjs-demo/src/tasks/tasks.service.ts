import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
    private tasks : Task[]= [];

    getAllTasks() : Task[] {
        return this.tasks;
    }
    //npm install --save uuid
    //yarn add uuid
    createTask(title : string, desc : string) : Task {
        const t : Task = {
            id : uuid(),
            title,
            desc,
            status: TaskStatus.OPEN,
        }
        this.tasks.push(t);
        return t;
    }
}
