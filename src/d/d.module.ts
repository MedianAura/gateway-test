import { Module } from '@nestjs/common';
import { DGateway } from './d.gateway';

@Module({
  providers: [DGateway]
})
export class DModule {}
