import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [ModelsService],
  providers: [ModelsService],
})
export class ModelsModule {}
