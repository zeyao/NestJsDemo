import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTasksDTO } from './dto/createTasksDTO';
import { GetTaskFilterDTO } from './dto/getTasksFiltersDTO';
import { TaskStatusValdiationPipe } from './pipe/taskStatusValidationPipe';

@Controller('tasks')
export class TasksController {
    
    constructor(private tasksService: TasksService) {       
    }

    //http://localhost:3000/tasks/?status=DONE&search=XXX
    @Get()
    getTasks(@Query(ValidationPipe) filterDTO : GetTaskFilterDTO) : Task[]{
        console.log(filterDTO);
        if (Object.keys(filterDTO).length) {
            return this.tasksService.getTasksWithFilters(filterDTO);
        }
        return this.tasksService.getAllTasks();
    }
    /** 
    @Post()
    createTask(@Body('title') title : string, @Body('desc') desc : string) : Task {
        console.log(title + " " + desc);
        return this.tasksService.createTask(title, desc);
    }**/

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTasksDTO: CreateTasksDTO) : Task {
        console.log(createTasksDTO.title);
        return this.tasksService.createTask(createTasksDTO);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.tasksService.getTaskById(id);
    }

    @Delete('/:id')
    deleteById(@Param('id') id : string) {
        return this.tasksService.deleteById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id : string, @Body('status', TaskStatusValdiationPipe) status : TaskStatus) {
        return this.tasksService.updateTaskStatus(id, status);
    }


}
