import { Vector } from './Vector';
import { truncateToNDec } from './utils';

export class Point {
   public x: number;
   public y: number;

   constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
   }

   copy(): Point {
      return new Point(this.x, this.y);
   }

   hasSameAbscissa(point: Point): boolean {
      return this.x === point.x;
   }

   hasSameOrdinate(point: Point): boolean {
      return this.y === point.y;
   }

   static equals(point1: Point, point2: Point): boolean {
      return point1.hasSameAbscissa(point2) && point1.hasSameOrdinate(point2);
   }

   copyTranslate(vector: Vector): Point {
      return new Point(
         truncateToNDec(this.x + vector.x),
         truncateToNDec(this.y + vector.y)
      );
   }

   translate(vector: Vector): void {
      this.x = truncateToNDec(this.x + vector.x);
      this.y = truncateToNDec(this.y + vector.y);
   }
}
