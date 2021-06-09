import { Module } from '@nestjs/common';
import { FGateway } from './f.gateway';

@Module({
  providers: [FGateway]
})
export class FModule {}
