import { Point } from './Point';
import { Coordinate } from './models';
import { truncateToNDec } from './utils';

export class Vector {
   public x: number;
   public y: number;

   constructor(element1: Point | number, element2: Point | number) {
      if (element1 instanceof Point) {
         if (!(element2 instanceof Point)) {
            throw new Error('Argument 2 must be of type point');
         }
         this.x = element2.x - element1.x;
         this.y = element2.y - element1.y;
      } else {
         if (!(typeof element2 === 'number')) {
            throw new Error('Argument 2 must be of type number');
         }
         this.x = element1;
         this.y = element2;
      }
   }

   isNull(): boolean {
      return this.x === 0 && this.y === 0;
   }

   static add(v1: Vector, v2: Vector): Vector {
      return new Vector(
         truncateToNDec(v1.x + v2.x),
         truncateToNDec(v1.y + v2.y)
      );
   }

   static prod(lambda: number, v: Vector): Vector {
      return new Vector(
         truncateToNDec(lambda * v.x),
         truncateToNDec(lambda * v.y)
      );
   }

   static scalarProduct(v1: Vector, v2: Vector): number {
      return v1.x * v2.x + v1.y * v2.y;
   }

   norm(): number {
      return Math.sqrt(Vector.scalarProduct(this, this));
   }

   directOrthogonalVectorSameNorm(): Vector {
      return new Vector(-this.y, this.x);
   }

   polarCoordinate(): Coordinate {
      return [this.norm(), Math.atan(this.y / this.x)];
   }
}
