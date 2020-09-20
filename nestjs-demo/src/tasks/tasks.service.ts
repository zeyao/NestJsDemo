import { Injectable, NotFoundException } from '@nestjs/common';
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
    async createTask(createTasksDTO: CreateTasksDTO) : Promise<Task> {
        return this.taskRepository.createTask(createTasksDTO);
    }

    //JS is a single thread language, so we have to use a lot of async await wait to achieve high avaliability 
    async getTaskById(id: number) : Promise<Task> {
        const found = await this.taskRepository.findOne(id);
        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    async getTasks(filterDTO : GetTaskFilterDTO) : Promise<Task[]> {
        return this.taskRepository.getTasks(filterDTO);
    }

    async deleteById(id : number) : Promise<void> {
        const res = await this.taskRepository.delete(id);
        if (res.affected === 0) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
    }

    async updateTaskStatus(id: number, status: TaskStatus) : Promise<Task>{
        const task = await this.getTaskById(id);  
        task.status = status;
        await task.save();  
        return task;
    }
}
