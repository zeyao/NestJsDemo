import { IsNotEmpty } from 'class-validator';
export class CreateTasksDTO {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    desc : string;
}

//validation pipe;
//npm install class-validator class-transformer --save
//yarn add class-validator class-transformer