export interface Task {
    id: string;
    title: string;
    desc: string;
    status: TaskStatus;
}

export enum TaskStatus {
    OPEN = 'OPEN',
    INPROGRESS = 'INPROGRESS',
    DONE = 'DONE',
}