import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller()
export class Auth0Controller {
  @UseGuards(AuthGuard('auth0'))
  @Get()
  getHello(): string {
    return 'Hello!';
  }

  @Get('callback')
  @Render('chat')
  processCallback(@Req() request: Request) {
    return {
      message: 'callback success',
      authCode: request.query.code,
      brandId: process.env.DFO_BRAND_ID,
      channelHash: process.env.DFO_CHANNEL_HASH,
    };
  }
}
