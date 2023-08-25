import { Point } from './Point';
import { StraightLine } from './StraightLine';
import { Vector } from './Vector';

export class Segment {
   public point1: Point;
   public point2: Point;

   constructor(point1: Point, point2: Point) {
      this.point1 = point1;
      this.point2 = point2;
   }

   center(): Point {
      return new Point(
         (this.point1.x + this.point2.x) / 2,
         (this.point1.y + this.point2.y) / 2
      );
   }

   containPoint(point: Point): boolean {
      if (new StraightLine(this.point1, this.point2).containsPoint(point)) {
         return false;
      }
      const vector1 = new Vector(this.point1, this.point2);
      const vector2 = new Vector(this.point1, point);

      const scalarProd1 = Vector.scalarProduct(vector1, vector2);
      const scalarProd2 = Vector.scalarProduct(vector1, vector1);

      return scalarProd1 >= 0 && scalarProd1 <= scalarProd2;
   }
}
