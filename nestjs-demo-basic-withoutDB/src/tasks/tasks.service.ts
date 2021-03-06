import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTasksDTO } from './dto/createTasksDTO';
import { GetTaskFilterDTO } from './dto/getTasksFiltersDTO';

@Injectable()
export class TasksService {
    private tasks : Task[]= [];

    getAllTasks() : Task[] {
        return this.tasks;
    }
    //npm install --save uuid
    //yarn add uuid
    createTask(createTasksDTO: CreateTasksDTO) : Task {
        const {title, desc} = createTasksDTO;
        const t : Task = {
            id : uuid(),
            title,
            desc,
            status: TaskStatus.OPEN,
        }
        this.tasks.push(t);
        return t;
    }

    getTaskById(id: string) : Task {
        const found = this.tasks.find(task => task.id === id);
        if (!found) {
            throw new NotFoundException(`Task with "${id}" not found`);
        }
        return found;
    }

    getTasksWithFilters(filterDTO : GetTaskFilterDTO) : Task[] {
        const {status, search} = filterDTO;
        let tasks = this.getAllTasks();
        if (status) {
            tasks = tasks.filter(t => t.status === status);
        }
        if (search) {
            tasks = tasks.filter(t => 
                t.title.includes(search) ||
                t.desc.includes(search),
            );
        }
        return tasks;
    }

    deleteById(id : string) :void {
        const found = this.getTaskById(id);
        //if not found we will throw exception
        this.tasks = this.tasks.filter(t => t.id !== id);
    }

    updateTaskStatus(id: string, status: TaskStatus) : Task {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
}
