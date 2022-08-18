import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { Auth0Controller } from './auth.controller';
import { Auth0Strategy } from './auth0.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'auth0' })],
  providers: [PassportModule, Auth0Strategy],
  controllers: [Auth0Controller],
  exports: [PassportModule],
})
export class AuthModule {}
