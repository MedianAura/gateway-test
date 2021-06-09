import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AModule } from './a/a.module';
import { BModule } from './b/b.module';
import { CModule } from './c/c.module';
import { DModule } from './d/d.module';
import { EModule } from './e/e.module';
import { FModule } from './f/f.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AModule,
    BModule,
    CModule,
    DModule,
    EModule,
    FModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
