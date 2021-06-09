import { Module } from '@nestjs/common';
import { AGateway } from './a.gateway';

@Module({
  providers: [AGateway]
})
export class AModule {}
