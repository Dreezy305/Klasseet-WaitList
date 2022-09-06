import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { JoinWaitListDto } from './dto/waitlist.dto';
import { WaitlistService } from './waitlist.service';

@Controller('waitlist')
export class WaitlistController {
  constructor(private waitListService: WaitlistService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('join')
  joinWaitList(@Body() dto: JoinWaitListDto) {
    return this.waitListService.joinWaitList(dto);
  }
}
