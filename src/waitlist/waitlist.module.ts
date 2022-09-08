import { Module } from '@nestjs/common';
import { WaitlistController } from './waitlist.controller';
import { WaitlistService } from './waitlist.service';

@Module({
  providers: [WaitlistService],
  controllers: [WaitlistController],
})
export class WaitlistModule {}
