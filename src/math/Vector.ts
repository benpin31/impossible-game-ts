import { Point } from './Point';

export class Vector {
   public x: number;
   public y: number;

   constructor(element1: Point | number, element2: Point | number) {
      if (element1 instanceof Point && element2 instanceof Point) {
         this.x = element2.x - element1.x;
         this.y = element2.y - element1.y;
      } else {
         this.x = element1 as number;
         this.y = element1 as number;
      }
   }
}
