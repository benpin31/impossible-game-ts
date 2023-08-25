export const DECIMALS_TO_KEEP = 10;

export const modulo = (n: number, mod: number): number =>
   ((n % mod) + mod) % mod;

export const truncateToNDec = (
   x: number,
   nDec: number = DECIMALS_TO_KEEP
): number => Math.round(x * 10 ** nDec) / 10 ** nDec;
