export class Point {
   x: number;
   y: number;

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

   static translate(point1: Point, point2: Point) {
      return new Point(point1.x + point2.x, point1.y + point2.y);
   }
}
