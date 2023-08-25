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

   copyTranslate(point: Point): Point {
      return new Point(
         truncateToNDec(this.x + point.x),
         truncateToNDec(this.y + point.y)
      );
   }

   translate(point: Point): void {
      this.x = truncateToNDec(this.x + point.x);
      this.y = truncateToNDec(this.y + point.y);
   }
}
