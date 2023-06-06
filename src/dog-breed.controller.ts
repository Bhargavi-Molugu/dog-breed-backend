import { Controller, Get } from '@nestjs/common';
import { DogBreedService } from './dog-breed.service';
import { DogBreed } from './dog-breed.service';

@Controller('api/dogs')
export class DogBreedController {
  constructor(private readonly dogBreedService: DogBreedService) { }
  
/**
 * This method will return the dogs breed list
 * @returns DogBreed Array
 */
  @Get()
  getDogBreedList(): DogBreed[] {
    return this.dogBreedService.getDogBreedList();
  }
}
