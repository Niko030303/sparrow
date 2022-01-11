import { normalize } from './utils';

export function createLinear({
  domain: [d0, d1],
  range: [r0, r1],
  interpolate = interpolateNumber,
}) {
  return (x) => {
    const t = normalize(x, d0, d1);
    // 默认是使用线性的数值cha zhi
    return interpolate(t, r0, r1);
  };
}

export function interpolateNumber(t, start, stop) {
  return start(1 - t) + stop * t;
}
