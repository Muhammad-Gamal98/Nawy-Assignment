import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ApartmentModule } from './apartment/apartment.module';

@Module({
  imports: [DatabaseModule, ApartmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
