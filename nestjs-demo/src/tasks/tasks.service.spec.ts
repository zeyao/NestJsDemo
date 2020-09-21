import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { GetTaskFilterDTO } from './dto/getTasksFiltersDTO';
import { TaskStatus } from './task-status.enum';

const mockTaskRepo = () => ({
    getTasks : jest.fn(),
    // mock the method async getTasks(filterDTO : GetTaskFilterDTO) : Promise<Task[]>{
});
//use the mock;

describe('TaskService', () =>  {
    let tasksService;
    let taskRepository;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers : [
                TasksService,
                {provide : TaskRepository, useFactory : mockTaskRepo },
            ],
        }).compile();

        tasksService =  await module.get<TasksService>(TasksService);
        taskRepository = await module.get<TaskRepository>(TaskRepository);
    });

    describe('getTasks' , () => {
        it('gets all tasks from respo' , async () => {
            expect(taskRepository.getTasks).not.toHaveBeenCalled();
            taskRepository.getTasks.mockResolvedValue('return val');

            const filters : GetTaskFilterDTO = {status: TaskStatus.INPROGRESS, search : "XXX" };
            const result = await tasksService.getTasks(filters);
            expect(taskRepository.getTasks).toHaveBeenCalled();
            expect(result).toEqual('return val');

        })
    });
});