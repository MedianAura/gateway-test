import { Module } from '@nestjs/common';
import { EGateway } from './e.gateway';

@Module({
  providers: [EGateway]
})
export class EModule {}
