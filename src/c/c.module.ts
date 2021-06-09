import { Module } from '@nestjs/common';
import { CGateway } from './c.gateway';

@Module({
  providers: [CGateway]
})
export class CModule {}
