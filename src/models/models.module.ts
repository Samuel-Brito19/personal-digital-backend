import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';
import { DatabaseModule } from 'src/database/database.module';
import { ModelsController } from './models.controller';

@Module({
  imports: [DatabaseModule],
  exports: [ModelsService],
  providers: [ModelsService],
  controllers: [ModelsController],
})
export class ModelsModule {}
