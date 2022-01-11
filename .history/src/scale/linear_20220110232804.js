import {
  normalize, tickStep, nice, floor, ceil, ticks,
} from './utils';

export function createLinear({
  domain: [d0, d1],
  range: [r0, r1],
  interpolate = interpolateNumber,
}) {
  const scale = (x) => {
    const t = normalize(x, d0, d1);
    return interpolate(t, r0, r1);
  };

  scale.ticks = (tickCount) =


  return (x) => {
    const t = normalize(x, d0, d1);
    // 默认是使用线性的数值插值器
    // 如果是颜色可以使用颜色插入器
    return interpolate(t, r0, r1);
  };
}

export function interpolateNumber(t, start, stop) {
  return start(1 - t) + stop * t;
}
