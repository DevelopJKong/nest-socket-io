import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { EventsGateway } from './event.gateway';

@Module({
  providers: [EventService, EventsGateway],
  controllers: [EventController],
})
export class EventModule {}
