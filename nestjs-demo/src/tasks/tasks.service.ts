import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTasksDTO } from './dto/createTasksDTO';
import { GetTaskFilterDTO } from './dto/getTasksFiltersDTO';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository : TaskRepository,
    ) {  

    }

    getAllTasks() {
    }

    async createTask(createTasksDTO: CreateTasksDTO) : Promise<Task> {
        const {title, desc} = createTasksDTO;
        const task = new Task();
        task.desc = desc;
        task.title = title;
        task.status = TaskStatus.OPEN;
        await task.save();
        return task;
    }

    //JS is a single thread language, so we have to use a lot of async await wait to achieve high avaliability 
    async getTaskById(id: number) : Promise<Task> {
        const found = await this.taskRepository.findOne(id);
        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    getTasksWithFilters(filterDTO : GetTaskFilterDTO) {
       
    }

    deleteById(id : string) :void {

    }

    updateTaskStatus(id: string, status: TaskStatus) {

    }
}
