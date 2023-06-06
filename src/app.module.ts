import { Module } from '@nestjs/common';
import { DogBreedController } from './dog-breed.controller';
import { DogBreedService } from './dog-breed.service';

@Module({
  imports: [],
  controllers: [DogBreedController],
  providers: [DogBreedService],
})
export class AppModule {}
