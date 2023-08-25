import { Point } from './Point';
import { Vector } from './Vector';
import { LineEquation } from './models';
import { truncateToNDec } from './utils';

export class StraightLine {
   public point1: Point;
   public point2: Point;

   constructor(element1: Point, element2: Point | Vector) {
      if (element1 instanceof Point && element2 instanceof Point) {
         if (!Point.equals(element1, element2)) {
            this.point1 = element1;
            this.point2 = element2;
         } else {
            throw "A straight line can't be defined by two identical points";
         }
      } else {
         if (!(element2 as Vector).isNull()) {
            this.point1 = element1;
            this.point2 = element1.copyTranslate(element2 as Vector);
         } else {
            throw "A straight line can't be defined by a null vector";
         }
      }
   }

   /**
    * return the equation of the straight line on the form of and array od three members. Equation ax+by+c = 0
    * is coded by [a,b,c]
    */
   equation(): LineEquation {
      if (this.point1.hasSameAbscissa(this.point2)) {
         return [1, 0, -this.point1.x];
      } else {
         const direction =
            (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x);
         const ordinateOrigin = this.point1.y - direction * this.point1.x;
         return [-direction, 1, -ordinateOrigin];
      }
   }

   containsPoint(point: Point): boolean {
      const equation = this.equation();
      return (
         truncateToNDec(
            equation[0] * point.x + equation[1] * point.y + equation[2]
         ) === 0
      );
   }
}
