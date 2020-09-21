import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, Logger } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTasksDTO } from './dto/createTasksDTO';
import { GetTaskFilterDTO } from './dto/getTasksFiltersDTO';
import { TaskStatusValdiationPipe } from './pipe/taskStatusValidationPipe';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Controller('tasks')
export class TasksController {
    
    private logger = new Logger('TasksController');

    constructor(private tasksService: TasksService) {       
    }

    //http://localhost:3000/tasks/?status=DONE&search=XXX
    @Get()
    getTasks(@Query(ValidationPipe) filterDTO : GetTaskFilterDTO) {
        return this.tasksService.getTasks(filterDTO);
    }
    /** 
    @Post()
    createTask(@Body('title') title : string, @Body('desc') desc : string) : Task {
        console.log(title + " " + desc);
        return this.tasksService.createTask(title, desc);
    }**/

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTasksDTO: CreateTasksDTO)  {
        this.logger.log(`User start to create task : ${JSON.stringify(createTasksDTO)} `);
        return this.tasksService.createTask(createTasksDTO);
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number) : Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Delete('/:id')
    deleteById(@Param('id', ParseIntPipe) id : number) : Promise<void>{
        return this.tasksService.deleteById(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id', ParseIntPipe) id : number, @Body('status', TaskStatusValdiationPipe) status : TaskStatus) :  Promise<Task> {
        return this.tasksService.updateTaskStatus(id, status);
    }


}
