import { Vector } from './math/Vector';
import { modulo, truncateToNDec } from './math/utils';

console.log(modulo(-5, 2));

console.log(truncateToNDec(1 / 3));

const v1 = new Vector(0, 1);
const v2 = new Vector(1, 0);

console.log(Vector.scalarProduct(v1, v2));
console.log('norm', v1.norm());
