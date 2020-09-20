import { Repository, EntityRepository } from "typeorm";
import { Task } from './task.entity';
import { CreateTasksDTO } from './dto/createTasksDTO';
import { TaskStatus } from "./task-status.enum";
import { GetTaskFilterDTO } from './dto/getTasksFiltersDTO';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    async createTask(createTasksDTO : CreateTasksDTO) : Promise<Task> {
        const {title, desc} = createTasksDTO;
        const task = new Task();
        task.desc = desc;
        task.title = title;
        task.status = TaskStatus.OPEN;
        await task.save();
        return task;
    }

    async getTasks(filterDTO : GetTaskFilterDTO) : Promise<Task[]>{
        const {status, search} = filterDTO;
        const query = this.createQueryBuilder('task');

        if (status) {
            query.andWhere('task.status = :status', {status});
        }

        if (search) {
            query.andWhere('(task.title LIKE :search OR task.desc LIKE :search)', { search: `%${search}%` });
        }
        console.log(query);
        const tasks = await query.getMany();
        return tasks;
    }

}