import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from './schedule/schedule.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [ScheduleModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
