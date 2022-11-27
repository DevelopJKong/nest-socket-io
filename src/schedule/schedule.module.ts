import { ScheduleModule as Scheduler } from '@nestjs/schedule';
import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';

@Module({
  imports: [Scheduler.forRoot()],
  providers: [ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
