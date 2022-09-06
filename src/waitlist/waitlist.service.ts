import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JoinWaitListDto } from './dto/waitlist.dto';

@Injectable()
export class WaitlistService {
  constructor(private prisma: PrismaService) {}

  async joinWaitList(dto: JoinWaitListDto) {
    await this.prisma.$connect();

    //   check if user exists
    const findEmail = await this.prisma.waitList.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (findEmail) {
      throw new ForbiddenException(
        'User exist, kindly join with a different email',
      );
    }

    const user = await this.prisma.waitList.create({
      data: {
        email: dto.email,
        fullName: dto.fullName,
        country: dto.country,
        role: dto.role,
      },
    });

    return {
      success: true,
      data: user,
      message: 'Successfully added to waitlist',
    };
  }
}
