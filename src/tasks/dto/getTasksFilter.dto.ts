import { TaskStatus } from '../taskStatus.enum';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}
