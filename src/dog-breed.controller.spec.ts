import { Test, TestingModule } from '@nestjs/testing';
import { DogBreedController } from './dog-breed.controller';
import { DogBreedService } from './dog-breed.service';

describe('DogBreedController', () => {
  let dogBreedController: DogBreedController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DogBreedController],
      providers: [DogBreedService],
    }).compile();

    dogBreedController = app.get<DogBreedController>(DogBreedController);
  });

  describe('root', () => {
    it('should return dog breed list', () => {
      expect(dogBreedController.getDogBreedList()).toHaveLength(60);
    });
  });
});
