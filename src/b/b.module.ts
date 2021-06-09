import { Module } from '@nestjs/common';
import { BGateway } from './b.gateway';

@Module({
  providers: [BGateway]
})
export class BModule {}
