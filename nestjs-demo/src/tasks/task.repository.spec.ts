import { Test } from "@nestjs/testing";
import { TaskRepository } from "./task.repository";

describe('TaskRepository', () => {
   let taskRepository;
    
   beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers : [
                TaskRepository,
            ],
        }).compile();

        taskRepository =  await module.get<TaskRepository>(TaskRepository);
    });

    describe('create user' , () => {
        let save;
        //mock task.save();
        beforeEach(() => {
            save = jest.fn();
            taskRepository.create = jest.fn().mockReturnValue({ save });
        });
        
        it(`success create`, () => {
            const mockTasksDTO = { title: 'test title', desc: `desc` };
            save.mockResolvedValue(null);
            expect(taskRepository.createTask(mockTasksDTO)).resolves.not.toThrow();
        })
 
    })


});