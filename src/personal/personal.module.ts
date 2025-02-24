import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PersonalService],
  controllers: [PersonalController],
  exports: [PersonalService],
})
export class PersonalModule {}
