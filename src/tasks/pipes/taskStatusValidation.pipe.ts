import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../taskStatus.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
  ];

  transform(value: any) {
    const newValue = value.toUpperCase();

    if (!this.isStatusValid(newValue)) {
      throw new BadRequestException(`"${value}" is a invalid status`);
    }

    return newValue;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);

    return idx !== -1;
  }
}
