import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
    
    constructor(private tasksService: TasksService) {       
    }

    @Get()
    getAllTasks() : Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body('title') title : string, @Body('desc') desc : string) : Task {
        console.log(title + " " + desc);
        return this.tasksService.createTask(title, desc);
    }
}
