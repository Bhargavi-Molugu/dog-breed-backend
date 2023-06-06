import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

/**
 * Interface for DogBreed
 */
export interface DogBreed {
  good_with_other_dogs: number;
  name: string;
  image_link: string;
  expanded: boolean,
  good_with_children: number,
  shedding: number,
  grooming: number,
  trainability: number
}

@Injectable()
export class DogBreedService {
  private dogBreedList: Array<DogBreed>;
  constructor() {
    this.dogBreedList = JSON.parse(fs.readFileSync('dog-breed.json', 'utf8')).data;
  }

  /**
   * This will rturn the dog breed list
   * @returns Array of DogBreed
   */
  getDogBreedList(): DogBreed[] {
    return this.dogBreedList;
  }
}
